document.addEventListener('DOMContentLoaded', function() {
	  const app = new senna.App();

	  // app.setBasePath('/');
	  app.addSurfaces('content', 'header');
	  // app.addRoutes(new senna.Route(/\w+\.html/, senna.HtmlScreen));
	  app.addRoutes([
	      new senna.Route('index.html', senna.HtmlScreen),
	      new senna.Route('blog.html', senna.HtmlScreen),
	      new senna.Route('contact.html', senna.HtmlScreen)
	    ]);

	  app.on('startNavigate', function(event) {
	    console.log(event);
	  });

	  app.on('endNavigate', function() {
	    console.log('end navigate');
	  });
	});