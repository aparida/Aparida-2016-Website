		$(document).ready(function() {
			$('body').css('display', 'none');
			$('body').delay(500).fadeIn(1200);

			$('.link').click(function() {
			event.preventDefault();
			newLocation = this.href;
			$('body').fadeOut(600, newpage);
			});
			function newpage() {
			window.location = newLocation;
			}
		});



		$(document).ready(function(){


			$("nav").sticky({topSpacing:0});
			// $('#home-overlay').fadeOut(800);
		


		 $(window).bind('scroll',function(event){
	      		var scrollTop=$(this).scrollTop();

	      		if(scrollTop > 440 && scrollTop < 550){
	      			$("#logo").css('top','626px'); 
	      			$("#logo").css('position','absolute'); 
	      			
	      		}	
	      		if(scrollTop < 440 ){
	      			$("#logo").css('top','200px');  
	      			$("#logo").css('position','fixed'); 
	      			
	      		}	
	      		if(scrollTop > 600){
	      			$("#logo").css('top','20px'); 
	      			$("#logo").css('position','fixed'); 
	      			
	      		}



	      		if(scrollTop > 160 && scrollTop < 550){
	      			$("#logo1").css('top','360px'); 
	      			$("#logo1").css('position','absolute'); 
	      			
	      		}	
	      		if(scrollTop < 160 ){
	      			$("#logo1").css('top','200px');  
	      			$("#logo1").css('position','fixed'); 
	      			
	      		}	
	      		if(scrollTop > 340){
	      			$("#logo1").css('top','20px'); 
	      			$("#logo1").css('position','fixed'); 
	      			
	      		}




	      		if(scrollTop < 60 ){
	      			$(".title p ").fadeIn(1000);
	      			$(".title .new-intro  ").fadeIn(1000);
	      		}	
	      		if(scrollTop > 80){
	      			$(".title p ").fadeOut(1000);
	      			$(".title .new-intro  ").fadeOut(1000);
	      		}	


	      		if(scrollTop < 60 ){
	      			$("#intro1 .hello ").fadeIn(1000);
	      			$("#intro1 .hello  ").fadeIn(1000);
	      		}	
	      		if(scrollTop > 80){
	      			$("#intro1 .hello ").fadeOut(1000);
	      			$("#intro1 .hello ").fadeOut(1000);
	      		}	

	 	 });

		
	
		// share button animation
		
		 $(".share-btn").hover(function() {
		 	$(".share-widget span.middle").fadeIn(400);
		 	$(".share-widget span.tooltip").fadeIn(400);
		 });


		$(".share-btn").mouseout(function() {
		 	$(".share-widget span.tooltip").delay(2000).fadeOut(600);
		 });



		// Add Current classes to Menu

		$('.mainNav li').click(function() {
			$('.mainNav li').removeClass("currentli");
			$(this).addClass("currentli");
		});

		$('.mainNav li').click(function() {
			$('.mainNav li a .navNumber').removeClass("current");
			$(this).find(".navNumber").addClass("current");
		});





		// SMOOTH SCROLLING

		$('nav a').smoothScroll();
		$('#logo a').smoothScroll();
		$('#arw-dwn a').smoothScroll();
		$('.title p a').smoothScroll();
	

	        	
	
		// <!-- slider -->
		
		$('.flexslider').flexslider({
			animation: "slide",
			animationLoop: true,
			itemWidth: 860,
			itemMargin: 0
		});
	

	
	// <!-- pretty-photo -->

		$("a[class^='prettyPhoto']").prettyPhoto({
			social_tools: false,
			theme: 'light_square',
			allow_resize:false,
		});
		 



	// <!-- tweets -->
		$("#tweet").hide();
		$(".tw-logo").mouseover(function() {

			$(".tw-logo").css('opacity','1');
			jQuery(function($){
				$("#tweet").tweet({
					join_text: "auto",
					username: "theparida",
					avatar_size: 36,
					count: 4,
					auto_join_text_default: " I said, ",
					auto_join_text_ed: " I ",
					auto_join_text_ing: " I was ",
					auto_join_text_reply: " I replied ",
					auto_join_text_url: " I was checking out ",
					loading_text: "loading tweets..."
				});
			});

			$("#tweet").fadeIn(800);
		});

});

	// gs analytics 

	  var _gaq = _gaq || [];
	  _gaq.push(['_setAccount', 'UA-36895330-1']);
	  _gaq.push(['_setDomainName', 'aparida.com']);
	  _gaq.push(['_setAllowLinker', true]);
	  _gaq.push(['_trackPageview']);

	  (function() {
	    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
	    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
	    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
	  })();

	




