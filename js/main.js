var form = document.querySelector('form');

form.addEventListener('submit', function(e) {
	e.preventDefault();

	WeDeploy
		.url('http://contact.lundyweddings.wedeploy.io/emails')
		.form('from', 'hello@lundyweddings.com')
		.form('to', form.to.value)
		.form('subject', "Hey There!")
		.form('message', form.message.value)
		.post()
		.then(function(response) {
			if (response.succeeded()) {
				form.reset();

				alert('Yay! Thanks for reaching out. We will get back to you shortly!);

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
