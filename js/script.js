	(function () {
		var button = document.getElementById('toogle-menu');
		button.addEventListener('click', function(event){
			event.preventDefault();
			var menu = document.getElementById('main-menu');
			menu.classList.toggle('is-open');
		});
	})();