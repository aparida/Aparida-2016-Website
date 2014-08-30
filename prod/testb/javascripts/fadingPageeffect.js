		$(document).ready(function() {
			$('body').css('display', 'none');
			$('body').fadeIn(1400);

			$('.link').click(function() {
			event.preventDefault();
			newLocation = this.href;
			$('body').fadeOut(800, newpage);
			});
			function newpage() {
			window.location = newLocation;
			}

			$('#logo .globe').css('display', 'none');
			$("#logo .globe").delay(1200).fadeIn(1200);
		});

			$(document).ready(function() {  
			    // fade in each image individually as it's downloaded  
			    $('img').load(function() {  
			        $(this).fadeIn('slow');  
			    });  
			});  
