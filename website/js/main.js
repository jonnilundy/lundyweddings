var form = document.querySelector('form');

var DOMAIN = window.location.hostname.split(".").slice(-3).join(".");

form.addEventListener('submit', function(e) {
	e.preventDefault();

	var message = form.first_name.value + ' ' + form.last_name.value +  '\n' + form.message.value

	WeDeploy
		.url('contact.'+DOMAIN+'/emails')
		.auth('7185a457-618a-48c4-8e03-793e8dd41e21')
		.form('from',  form.from.value)
		.form('to', 'jelundy@me.com')
		.form('subject', "Hey There!")
		.form('message', message )
		.post()
		.then(function(response) {
			console.log(response);
			if (response.succeeded()) {
				form.reset();

				alert('Yay! Thanks for reaching out. We will get back to you shortly!');

				console.info('Email ID:', response.body());
			}
			else {
				alert('Email was not sent');
			}
		})
		.catch(function(error) {
			alert('Ops, some error has happened.');
		});
});

// INVESTMENT FORM //

var totalLength = 0;
var totalLocation = 0;
var totalEngagementSession = 0;

function calculateLength() {
	var select = document.getElementById("length");
	var selectValue = select.options[select.selectedIndex].value;
	var weddingLength = new Array();
		weddingLength["0"] = 0;
		weddingLength["4"] = 400;
		weddingLength["6"] = 600;
		weddingLength["8"] = 800;

	totalLength = weddingLength[selectValue];

	updateTotalValue();

}

function calculateLocation() {
	var select = document.getElementById("location");
	var selectValue = select.options[select.selectedIndex].value;
	var weddingLocation = new Array();
		weddingLocation["none"] = 0;
		weddingLocation["orangecounty"] = 0;
		weddingLocation["santaclarita"] = 50;
		weddingLocation["portland"] = 350;

	totalLocation = weddingLocation[selectValue];

	updateTotalValue();
}

function calculateEngagementSession() {

	var checkbox = document.getElementById("engagementsession");

	if (checkbox.checked == true) {
		totalEngagementSession = 500;
	} else {
		totalEngagementSession = 0;
	}

	updateTotalValue();
}


// Print the total
function updateTotalValue() {
	var totalDiv = document.querySelector(".total-investment");
	var total = totalLength + totalLocation + totalEngagementSession;
	totalDiv.innerHTML = total;
}