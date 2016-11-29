var form = document.querySelector('form');

form.addEventListener('submit', function(e) {
	e.preventDefault();

	var message = form.first_name.value + ' ' + form.last_name.value +  '\n' + form.message.value

	WeDeploy
		.url('http://contact.lundyweddings.wedeploy.io/emails')
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
