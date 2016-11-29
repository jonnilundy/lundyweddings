var form = document.querySelector('form');

form.addEventListener('submit', function(e) {
	e.preventDefault();

	var message = form.name.value + ' ' + form.last_name.value +  '\n' + form.message.value

	WeDeploy
		.url('http://contact.lundyweddings.wedeploy.io/emails')
		.form('from',  form.from.value)
		.form('to', 'hello@lundyweddings.com')
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
