var jQ = jQuery.noConflict();

jQ(document).ready(function(){
	
	jQ(window).on("load", function () {
		jQ('body').css('opacity','1');
	});
	setTimeout(function(){
		jQ('body').css('opacity','1');
	},5000);
	if (typeof foo !== 'undefined') {
		// Now we know that foo is defined, we are good to go.
	}
	jQ('html').attr('user-agent',navigator.userAgent);
	
		/*START function Same height boxes--------------------*/ 
	
		function sameheight1($object){
			var Box1 = 0;
				jQ($object).each(function(){  
					if(jQ(this).height() > Box1){  
						Box1 = jQ(this).height();  
					}
			});    
			jQ($object).height(Box1);
		}

		function sameheight3($object){
			var Box3 = 0;
				jQ($object).each(function(){  
					if(jQ(this).outerHeight() > Box3){  
						Box3 = jQ(this).height();  
					}
			});    
			jQ($object).height(Box3);
		}
	
		// sameheight1("#");  
	
		function sameheight2($object1, $object2){
			var Box2 = 0;
			jQ($object1).each(function(){  
				if(jQ(this).height() > Box2){  
					Box2 = jQ(this).height();  
				}
			});    
			jQ($object2).height(Box2);
		}
	
		// sameheight2("#1", "#2" );
	
/*END function Same height boxes--------------------*/
/*Start function Slider Wrap into Item--------------*/

	function itemswrap($path, $number, $wrap){
		 var divgallry = jQ($path);
		for(var i = 0; i < divgallry.length; i+=$number) {
			divgallry.slice(i, i+$number).wrapAll($wrap);
		}    
	}
	function itemsunwrap($path){
		jQ($path).unwrap();
	}

/*END function Slider Wrap into Item----------------------------*/
/*Start function Slider Bullets Wrap----------------------------*/

	function bulletsWrap($sliderID){
		var indicatorsProduct= jQ($sliderID + " .carousel-item").size();  
		var row = jQ('<li data-target="'+$sliderID+'"></li>');
		
		for (var i=0; i<indicatorsProduct; i++) {
				jQ($sliderID + ' .carousel-indicators').append(row.clone());
		}
		var counterProduct=-1;
		jQ($sliderID + " .carousel-indicators li").each(function(){
		counterProduct++;
				var self=jQ(this);
				self.attr('data-slide-to', counterProduct);
		});  

		jQ($sliderID + " .carousel-indicators li").first().addClass('active');
	}

/*END function Slider Bullets Wrap----------------------------*/
/*START Slider Touchable--------------------*/
	// jQ("#home-slider").swiperight(function() {  
	// 	jQ(this).carousel('prev');  
	//  });  
	// jQ("#home-slider").swipeleft(function() {  
	// 	jQ(this).carousel('next');  
	// }); 
	
	// jQ("#carousel__testimonial_home").swiperight(function() {  
	// 	jQ(this).carousel('prev');  
	// });  
	// jQ("#carousel__testimonial_home").swipeleft(function() {  
	// 	jQ(this).carousel('next');  
	// }); 

	/*Start Home Slider Wrap into Item----------------------------*/

	// jQ(window).bind('load',function(){
	// 	jQ('.loader-container').addClass('exit')
	// 	setTimeout(function() {
	// 		jQ('.loader-container').css('display','none');
	// 	},1200); 
	// });

	/*Start mouseover Item----------------------------*/
		jQ(".section-d .card").mouseover(function(){
			var takeImageSrc = jQ(this).find('.events-image').attr('src');
            jQ('.img-container .img-wrap img').attr('src', takeImageSrc);
		});
	/*END mouseover Item----------------------------*/
	jQ('#sb_instagram #sbi_load .sbi_load_btn, #sb_instagram .sbi_follow_btn a').addClass("btn-3");
	

	/*START buttons hover in cards--------------------*/

		jQ('.section-d .card').hover(function(){
			jQ(this).find('span[class*="btn"]').toggleClass('hover');
		});

	/*END buttons hover in cards--------------------*/

	// jQ('.grid').masonry({
	// 	itemSelector: '.grid-item',
	// 	columnWidth: '.grid-sizer',
	// 	percentPosition: true
	// });

		/*END buttons hover in cards--------------------*/
		// if (jQ(window).width() > 991.98) {
		// 	/*********************
		// 	  Grid Gallery Initialize 
		// 	***************************/
		// 	jQ('.grid').masonry({
		// 	  // options
		// 	  itemSelector: '.grid-item',
		// 	  isFitWidth: true,
		// 	  //originTop: true,
		// 	  //originLeft: true,
		// 	  gutter: 0,
		// 	  columnWidth: false,
		// 	  fitWidth: true,
		// 	  //isFitWidth: true,
		// 	});
		// 	} else {
		// 	/*********************
		// 	  Grid Gallery Initialize 
		// 	***************************/
		// 	jQ('.grid-container').masonry({
		// 	  // options
		// 	  itemSelector: '.grid-item',
		// 	  isFitWidth: true,
		// 	  //originTop: true,
		// 	  //originLeft: true,
		// 	  gutter: 10,
		// 	  columnWidth: 360,
		// 	  fitWidth: true,
		// 	});
		// 	} /*END else*/


		var firstName = "";
		var lastName = "";
		var email = "";
		var dType = "";
		var receipt = "";
		var anon = "";
		var list = "";
		var amount = "";
		
		// jQ('.set-amount').autoGrow(0);
		
		/*
			if(isiPad || jQuery.browser.mobile){
				jQ('#team').hide()
				jQ('.team-mobile').show();	
			}else{
				jQ('#team').show()
				jQ('.team-mobile').hide();
			}
		*/
		
		//Set & Highlight Donation Amount
		jQ(".button").click(function(){
			jQ(".button").removeClass("selected");
			jQ(this).addClass("selected");
			
			jQ(this).find("input").focus();
		});
		
		//Grow the donation box if they type more than 4 numbers
		jQ(".set-amount").keyup(function(){
			
			if (this.value != this.value.replace(/[^0-9\.]/g, '')) {
		       this.value = this.value.replace(/[^0-9\.]/g, '');
		    }

		});
		
		
		jQ("input").on("change", function(){
			// $(".donation-box").css("height", "500px");
			
			firstName = jQ("#firstName").val();
			lastName = jQ("#lastName").val();
			email = jQ("#email").val();
			
			if ( jQ("#one-time").prop( "checked" ) ){
				dType = "One-Time";
			}
			if ( jQ("#monthly").prop( "checked" ) ){
				dType = "Monthly";
			}

		});
	
			

/*START Resize--------------------*/

 function myOrientResizeFunction(){
	 
	 jQ(window).on('load',function(){
		setTimeout(function(){
			jQ('.section-h .card-body').css('height','auto');
			sameheight3(".section-h .card-body"); 
			jQ('.section-g .card-body').css('height','auto');
			sameheight3(".section-g .card"); 
		},500);
	});

	if (jQ(window).width() > 767){
		
		jQ(window).on('load',function(){
			setTimeout(function(){
			jQ('.section-d .info-wrap').css('height','auto');
			sameheight1(".section-d .info-wrap"); 

			jQ('body.page .interior-section-j .card .card-body').css('height','auto');
			sameheight1("body.page .interior-section-j .card .card-body"); 

			jQ('body.page .interior-section-l .card-body').css('height','auto');
			sameheight1("body.page .interior-section-l .card-body"); 
			},500);
		});

	}



	// jQ('.section-b h2').css('height','auto');
	// sameheight1(".section-b h2"); 

	// jQ('.section-b .info-container').css('height','auto');
	// sameheight1(".section-b .info-container"); 

	setTimeout(function() {

		jQ('.container-blog-post.w20 .single-post .body-post').css('height','auto');
		sameheight1(".container-blog-post.w20 .single-post .body-post");

		jQ('.interior-page .entry-content .carousel_block_testimonials #carousel__testimonials .content-testimonial .quote').css('height','auto');
		sameheight1(".interior-page .entry-content .carousel_block_testimonials #carousel__testimonials .content-testimonial .quote	");

		jQ('.container-blog-post .card .card-body, .container-blog-post .card .body-post').css('height','auto');
		sameheight1(".container-blog-post .card .card-body, .container-blog-post .card .body-post");
		
	},500); 


	var lBox = jQ('#wpadminbar').height();

	if (jQ('body').hasClass('logged-in')){
		jQ('header.header').css("marginTop",lBox);
	}
	// var bBox = 0;
	// var bBox = jQ('.section-b .img-wrap').width();
	// jQ('.section-b .img-wrap').height(bBox);
	// setTimeout(function(){

	// },1000);

	setTimeout(function(){
		// var bBox = 0;
		// bBox = jQ('.lvtn-square').width(); 

		// jQ('.lvtn-square').height(bBox);

		// var bBox = 0;
		// bBox = jQ('.e .lvtn-square').width(); 

		// jQ('.e .lvtn-square').height(bBox);
	},1000);


	// if (jQ(window).width() > 1199){
	// 	/*END header desktop---------------------------------------------------*/

	// 	var menuTopD = jQ('#NavDropdown .mobile-container').clone(); 
	// 	// console.log(menuTopD);
	// 	if(menuTopD !== undefined){
	// 			jQ('.box-b').prepend(menuTopD);
	// 			jQ('#NavDropdown .mobile-container').remove();
	// 	}
	// }else{

	// 	var menuTopM = jQ('.box-b .mobile-container').clone(); 
	// 	if(menuTopM !== undefined){
	// 			jQ('#menu-main-menu, #menu-menu').after(menuTopM);
	// 			jQ('.box-b .mobile-container').remove();
	// 	}
	// }

	if (jQ(window).width() > 1200){
		itemsunwrap('#testimonial-home-slider .content-wrap .single-box');
		itemsunwrap('#testimonial-home-slider .carousel-item .single-box');
		itemswrap("#testimonial-home-slider .single-box", 4, '<div class="content-wrap"></div>');
		sameheight1("#testimonial-home-slider .content-wrap");
		itemswrap("#testimonial-home-slider .content-wrap", 1, '<div class="carousel-item"></div>');
		jQ("#testimonial-home-slider .carousel-item").first().addClass('active');

		itemsunwrap('#sponsors-home-slider .content-wrap .single-box');
		itemsunwrap('#sponsors-home-slider .carousel-item .single-box');
		itemswrap("#sponsors-home-slider .single-box", 5, '<div class="content-wrap"></div>');
		sameheight1("#sponsors-home-slider .content-wrap");
		itemswrap("#sponsors-home-slider .content-wrap", 1, '<div class="carousel-item"></div>');
		jQ("#sponsors-home-slider .carousel-item").first().addClass('active');

		itemsunwrap('#carousel__sponsors .content-wrap .single-sponsor');
		itemsunwrap('#carousel__sponsors .carousel-item .single-sponsor');
		itemswrap("#carousel__sponsors .single-sponsor", 4, '<div class="content-wrap"></div>');
		sameheight1("#carousel__sponsors .content-wrap");
		itemswrap("#carousel__sponsors .content-wrap", 1, '<div class="carousel-item"></div>');
		jQ("#carousel__sponsors .carousel-item").first().addClass('active');
		
	}
	
	if (jQ(window).width() <= 1200 && jQ(window).width() > 768){
		itemsunwrap('#testimonial-home-slider .content-wrap .single-box');
		itemsunwrap('#testimonial-home-slider .carousel-item .single-box');
		itemswrap("#testimonial-home-slider .single-box", 4, '<div class="content-wrap"></div>');
		sameheight1("#testimonial-home-slider .content-wrap");
		itemswrap("#testimonial-home-slider .content-wrap", 1, '<div class="carousel-item"></div>');
		jQ("#testimonial-home-slider .carousel-item").first().addClass('active');
		
		itemsunwrap('#sponsors-home-slider .content-wrap .single-box');
		itemsunwrap('#sponsors-home-slider .carousel-item .single-box');
		itemswrap("#sponsors-home-slider .single-box", 5, '<div class="content-wrap"></div>');
		sameheight1("#sponsors-home-slider .content-wrap");
		itemswrap("#sponsors-home-slider .content-wrap", 1, '<div class="carousel-item"></div>');
		jQ("#sponsors-home-slider .carousel-item").first().addClass('active');

		itemsunwrap('#carousel__sponsors .content-wrap .single-sponsor');
		itemsunwrap('#carousel__sponsors .carousel-item .single-sponsor');
		itemswrap("#carousel__sponsors .single-sponsor", 4, '<div class="content-wrap"></div>');
		sameheight1("#carousel__sponsors .content-wrap");
		itemswrap("#carousel__sponsors .content-wrap", 1, '<div class="carousel-item"></div>');
		jQ("#carousel__sponsors .carousel-item").first().addClass('active');
	}
	
	if (jQ(window).width() < 1201){
		// jQ('.section-e .card').addClass('hover');

	}


	
	if (jQ(window).width() <= 768 && jQ(window).width() > 599) {
		itemsunwrap('#testimonial-home-slider .content-wrap .single-box');
		itemsunwrap('#testimonial-home-slider .carousel-item .single-box');
		itemswrap("#testimonial-home-slider .single-box", 2, '<div class="content-wrap"></div>');
		sameheight1("#testimonial-home-slider .content-wrap");
		itemswrap("#testimonial-home-slider .content-wrap", 1, '<div class="carousel-item"></div>');
		jQ("#testimonial-home-slider .carousel-item").first().addClass('active');

		itemsunwrap('#sponsors-home-slider .carousel-item .single-box');
		itemswrap("#sponsors-home-slider .single-box", 3, '<div class="content-wrap"></div>');
		sameheight1("#sponsors-home-slider .content-wrap");
		itemswrap("#sponsors-home-slider .content-wrap", 1, '<div class="carousel-item"></div>');
		jQ("#sponsors-home-slider .carousel-item").first().addClass('active');

		itemsunwrap('#carousel__sponsors .content-wrap .single-sponsor');
		itemsunwrap('#carousel__sponsors .carousel-item .single-sponsor');
		itemswrap("#carousel__sponsors .single-sponsor", 2, '<div class="content-wrap"></div>');
		sameheight1("#carousel__sponsors .content-wrap");
		itemswrap("#carousel__sponsors .content-wrap", 1, '<div class="carousel-item"></div>');
		jQ("#carousel__sponsors .carousel-item").first().addClass('active');
	
	}
	
	if (jQ(window).width() < 600) {
		itemsunwrap('#testimonial-home-slider .content-wrap .single-box');
		itemsunwrap('#testimonial-home-slider .carousel-item .single-box');
		itemswrap("#testimonial-home-slider .single-box", 1, '<div class="content-wrap"></div>');
		sameheight1("#testimonial-home-slider .content-wrap");
		itemswrap("#testimonial-home-slider .content-wrap", 1, '<div class="carousel-item"></div>');
		jQ("#testimonial-home-slider .carousel-item").first().addClass('active');
		
		itemsunwrap('#sponsors-home-slider .carousel-item .single-box');
		itemswrap("#sponsors-home-slider .single-box", 1, '<div class="content-wrap"></div>');
		sameheight1("#sponsors-home-slider .content-wrap");
		itemswrap("#sponsors-home-slider .content-wrap", 1, '<div class="carousel-item"></div>');
		jQ("#sponsors-home-slider .carousel-item").first().addClass('active');

		itemsunwrap('#carousel__sponsors .content-wrap .single-sponsor');
		itemsunwrap('#carousel__sponsors .carousel-item .single-sponsor');
		itemswrap("#carousel__sponsors .single-sponsor", 1, '<div class="content-wrap"></div>');
		sameheight1("#carousel__sponsors .content-wrap");
		itemswrap("#carousel__sponsors .content-wrap", 1, '<div class="carousel-item"></div>');
		jQ("#carousel__sponsors .carousel-item").first().addClass('active');
	}





	
	var sectionC = jQ('#counter');
		if(sectionC.length !== 0){
				var dTop = jQ('#counter').offset().top;
				//console.log(dTop);
				var once = 0;
				jQ(window).bind('scroll', function () {
						if (jQ(window).scrollTop() > (dTop - 500)) {
								if(once == 0){
										//console.log('in');
										jQ('.numscroller').each(function () {
												jQ(this).prop('Counter',0).animate({
														 Counter: parseInt(jQ(this).text())
												}, {
														duration: 3000,
														easing: 'swing',
														step: function (now) {
																jQ(this).text(Math.ceil(now).toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
														}
												});
										}); 
										jQ('.numscrollerdec').each(function () {
												jQ(this).prop('Counter',0).animate({
														 Counter: parseFloat(jQ(this).text()).toFixed(1)
												}, {
														duration: 3000,
														easing: 'swing',
														step: function (now) {
																jQ(this).text(parseFloat(now).toFixed(1));
														}
												});
										}); 
										once = 1;        
								}
						}else{
								once = 0;
						}
				});
		} 

	
	if(jQ(".section-testimonials-carousel").length > 0) {   

		var $title_section_float = jQ('.container-control');    
		var $positionDiv = jQ('#carousel__testimonial_home .left-side').offset().top - jQ('#carousel__testimonial_home').offset().top;
		jQ($title_section_float).css('top',$positionDiv);
		jQ('#carousel__testimonial_home .left-side').css('padding-top',$title_section_float.outerHeight()+'px');
		
	} /*---- Only on HomePage ---*/

	jQ('.carousel-sync').on('slide.bs.carousel', function(ev) {
		// get the direction, based on the event which occurs
		var dir = ev.direction == 'right' ? 'prev' : 'next';
		// get synchronized non-sliding carousels, and make'em sliding
		jQ('.carousel-sync').not('.sliding').addClass('sliding').carousel(dir);
	});
	jQ('.carousel-sync').on('slid.bs.carousel', function(ev) {
		// remove .sliding class, to allow the next move
		jQ('.carousel-sync').removeClass('sliding');
	});

	

	// jQ('#image-slider').removeClass('active');
	// if (jQ('#image-slider .carousel-item').hasClass('active')){
	// 	jQ('#image-slider .carousel-item.active').parent().parent().addClass('active');
	// } 
	// jQ('.card button').click(function(){
	// setTimeout(function(){
	// 	if (jQ('#image-slider .carousel-item').hasClass('active')){
	// 		jQ('.accordion.accordion-style-1 .card').removeClass('active')
	// 		jQ('#image-slider .carousel-item.active').parent().addClass('active');
	// 	} 
	// },400);

	// });


	setTimeout(function() {

// 		var $headerHeight = jQ('header.fixed-top');
// 		jQ('body').css('padding-top',$headerHeight.height()+'px');
	
	},500);

	// Extra large devices (large desktops, 1200px and up)
	if (jQ(window).width() >= 1199.99){

		// jQ('body').addClass('fixed');
		/*START Fixed Header--------------------*/
		/* var $headerOffset = jQ('header.header').offset().top;
		 if( $headerOffset >= 160 ){
			jQ('body').addClass('fixed');
		 }*/
		//  jQ(window).bind('scroll', function () {
		// 	if (jQ(window).scrollTop() > 60) {
		// 		jQ('body').addClass('fixed');
		// 	}
		// 	else {
		// 		jQ('body').removeClass('fixed');
		// 	}
		// });

		if (jQ(window).scrollTop() > 60) {
			jQ('body').addClass('fixed');
			jQ('body').addClass('show-search');
		}

		var lastScrollTop = 0;
		jQ(window).scroll(function(event){
			if (jQ(window).scrollTop() > 60) {
				jQ('body').addClass('fixed');
			}
			else {
			jQ('body').removeClass('fixed');
			}
		var st = jQ(this).scrollTop();
		if (st > lastScrollTop){
			// downscroll code
			jQ('body').addClass('show-search');
		} else {
			// upscroll code
			jQ('body').removeClass('show-search');
		}
		lastScrollTop = st;
		});
		/*END Fixed Header--------------------*/

			setTimeout(function() {

				//jQ('.header-toolbar').prependTo('.header-navigation');
				//jQ('#NavDropdown .header-toolbar').prependTo('.navbar.navbar-expand-lg');
			},500); 

		/*START header desktop------------------------------------------------*/
			jQ(".dropdown-btn").unbind();
			jQ('.dropdown, .dropdown-menu').unbind();
			jQ('.dropdown-btn').remove();

			 /*START Dropdown Main Menu Animation--------------------*/
			 jQ('.dropdown, .dropdown-menu').hover(function(){
				jQ(this).children('.dropdown-menu').stop(true, false).slideDown("fast").addClass('display_dropdown');
			}, function(){
					jQ(this).children('.dropdown-menu').stop(true, false).slideUp("fast").removeClass('display_dropdown');
			});
			jQ(".dropdown-btn").click(function(){
					jQ(this).next().slideToggle("fast");
			});

		
	}  else if (jQ(window).width() <= 1199.98) {
		// jQ('body').addClass('fixed');

		
		// START Fixed Header--------------------
		var $headerOffset = jQ('header.header').offset().top;
		if( $headerOffset >= 160 ){
		jQ('body').addClass('fixed');
		}
			jQ(window).bind('scroll', function () {
					if (jQ(window).scrollTop() > 10) {
						jQ('body').addClass('fixed');
					}
					else {
						jQ('body').removeClass('fixed');
					}
			});

		// END Fixed Header--------------------*/
			
		setTimeout(function() {
			
			//jQ('header.header .header-toolbar').insertAfter('#NavDropdown ul.navbar-nav');
		
		},500);

		/*START Include Dropdown Button--------------------*/
			jQ('.dropdown-btn').remove();
			var itemBtn = '<button  class="dropdown-toggle dropdown-btn"><span class="fas fa-caret-right"></span></button>';
			jQ( 'header .nav .dropdown > a').after(itemBtn);
		/*END Include Dropdown Button--------------------*/
		 
			var $sidenav = jQ('#NavDropdown'),
				$toggler = jQ('.navbar-toggler');

			$sidenav.css('opacity', 0);
			$sidenav.css('right', '-100%');

			$toggler.click(function() {
				$toggler.toggleClass('active');
				if (!$sidenav.hasClass('show')) {
					showSidenav();
					jQ("header.header").addClass('active');
				} else {
					hideSidenav();
					jQ("header.header").removeClass('active');
				}
				$sidenav.toggleClass('show');
			});

			function showSidenav() {
				$sidenav.css('opacity', 1);
				window.setTimeout(function() {
					$sidenav.css({
						'right':'0%',
					});
				}, 100);
				$sidenav.addClass('show');
			};

			function hideSidenav() {
				$sidenav.css({
					'right':'-100%'
				});
				window.setTimeout(function() {
					$sidenav.css('opacity', 0);
				}, 500);
				$sidenav.removeClass('show');
			};

			/*START Dropdown Main Menu Animation--------------------*/
				jQ(".dropdown-btn").unbind();
				jQ('.dropdown, .dropdown-menu').unbind();

				jQ(".dropdown-btn, .dropdown-toggle .dropdown-btn").click(function(){
						jQ(this).find('.fas').toggleClass('open');
						jQ(this).next().slideToggle();
				});
			/*END Dropdown Main Menu Animation--------------------*/

			/*START Dropdown Main Menu Animation--------------------*/
				jQ('header .nav .dropdown .dropdown-menu').css('display','none');
				jQ(".dropdown, .dropdown-menu .dropdown").unbind();
				/*jQ(".navbar-header button.navbar-toggle").click(function(event) {
						event.preventDefault();
					jQ(".dropdown-menu").slideUp("400");
				});*/
				jQ( "#NavDropdown ul li.menu-item-has-children").each(function(){        
					jQ('#NavDropdown ul li.menu-item-has-children ul li.active').parent().parent().addClass('active');
				});
			/*END Dropdown Main Menu Animation--------------------*/

	} else if (jQ(window).width() <= 767.98) {
	
// 		setTimeout(function() {

// 			var $headerHeight = jQ('header.fixed-top');
// 			jQ('body').css('padding-top',$headerHeight.height()+'px');
		
// 		},500);

}

if (jQ(window).width() <= 767.98){
	var $sidenav = jQ('#NavDropdown'),
					$toggler = jQ('.navbar-toggler');

			$toggler.click(function() {
				// $toggler.toggleClass('active');
				if (!$sidenav.hasClass('show')) {
					showSidenav();
				} else {
					hideSidenav();
				}
				$sidenav.toggleClass('show');
			});

			function showSidenav() {
				$sidenav.css('opacity', 1);
				window.setTimeout(function() {
					$sidenav.css({
						'right':'0%',
					});
				}, 100);
				$sidenav.addClass('show');
			};

			function hideSidenav() {
				$sidenav.css({
					'right':'-100%'
				});
				window.setTimeout(function() {
					$sidenav.css('opacity', 0);
				}, 500);
				$sidenav.removeClass('show');
			};
}
	
	/*END header mobile-------------------------------------------------------------------------------------------*/

	/********************************
		Carousel Homepage 
	********************************/   
		 jQ('#home-slider ol.carousel-indicators li').remove();
		 bulletsWrap("#home-slider");

		 jQ('.section-h #carousel__sponsors ol.carousel-indicators li').remove();
		 bulletsWrap(".section-h #carousel__sponsors");

		//  jQ('#info-slider ol.carousel-indicators li').remove();
		//  bulletsWrap("#info-slider");
		 

	} myOrientResizeFunction();

	//*START carousels Touchable--------------------*/

	jQ(window).bind('resize', function(e){
		if (window.RT) clearTimeout(window.RT);
		window.RT = setTimeout(function(){
			 // this.location.reload(false); /* false to get page from cache */
				myOrientResizeFunction();
		}, 0);
	}); 

	jQ(window).resize(function(){
	 myOrientResizeFunction();
	});

	/*START Search--------------------*/    
		jQ('.search #searchform #s').attr('placeholder', 'Search here...');
		jQ('.open-search').click(function() {
			jQ('.search-section').slideToggle('400');
				setTimeout(function(){
				jQ('#s').focus();
			},500);
		});  
	/*END Search--------------------*/
	
});

// jQ('.section-c .card').hover(function(){

// 	jQ('.section-c .card-img-overlay').slideToggle('400');

// });  






if (jQ(window).width() >= 1199.99){
	jQ('.section-b .card .hover-wrap').css('display','none');
	jQ('.section-b .card').hover(function(){
		jQ(this).find('.hover-wrap').slideToggle('400');
		// jQ(this).toggleClass("active");
	});

	/*START buttons hover in cards--------------------*/

	// jQ('.section-c .card').hover(function(){
	// 	jQ(this).find('span[class*="btn"]').toggleClass('hover');
	// });

	// jQ('.section-e .content-wrap .single-box' ).hover(function(){
	// 	jQ(this).removeClass('hide').addClass('active');
	// });

	jQ(".section-e .content-wrap .single-box").addClass("hide")
	
	jQ(".section-e .content-wrap .single-box").hover(function(){
		if (jQ(this).hasClass('hide')){
			jQ(this).removeClass('hide').addClass('active');
		}else{
			jQ(this).removeClass('active').addClass('hide');
		}
		
	});

	

/*END buttons hover in cards--------------------*/	

}

jQ("button.video.mp4").click(function () {
	var theModal = jQ(this).data("target"),
	videoSRC = jQ(this).attr("data-video"),
	videoSRCauto = videoSRC;
	jQ(theModal).find("video").css("display", "block");
	jQ(theModal).find("iframe").css("display", "none");
	jQ(theModal + ' video source').attr('src', videoSRCauto);
	setTimeout(function() {
			jQ(theModal + ' video').get(0).load();
			jQ(theModal + ' video').get(0).play();
	},500);

	jQ(theModal + ' button.close').click(function () {
			jQ(theModal + ' video source').attr('src', videoSRC);
			jQ(theModal + ' video').get(0).pause();
	});
});

jQ("button.video.youtube").click(function () {
	var theModal1 = jQ(this).data("target"),
	videoSRC1 = jQ(this).attr("data-video"),
	videoSRCauto1 = videoSRC1 + "?modestbranding=1&rel=0&controls=0&showinfo=0&html5=1&autoplay=1";
	jQ(theModal1).find("video").css("display", "none");
	jQ(theModal1).find("iframe").css("display", "block");
	jQ(theModal1 + ' iframe').attr('src', videoSRCauto1);
	jQ(theModal1 + ' button.close, .modal').click(function () {
			jQ(theModal1 + ' iframe').attr('src', videoSRC1);
	});
});

jQ('a.switcher-popup').click(function(){
	jQ('.gt_languages .glink').each(function(){
		jQ(this).children('img').attr('src',jQ(this).children('img').attr('data-gt-lazy-src'));
	});	
});


/*FUNCTION SLOW ANIMATION ANCHOR LINKS-------------------------------*/  

/* Add rel="external" to links that are external (this.hostname !== location.hostname) BUT don't add to anchors containing images */
// jQ('body p a').each(function() {
//   // Compare the anchor tag's host name with location's host name
//   return this.hostname && this.hostname !== location.hostname;
// }).not('a:has(img)').attr("rel","external");


jQ(".anchor, li.anchor a, p.anchor a, .anchor a").click(function() {
	if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
		
		var target = jQ(this.hash);
		target = target.length ? target : jQ('[name=' + this.hash.slice(1) +']');
		if (target.length) {
			jQ('html,body').animate({
				scrollTop: target.offset().top - 180
			}, 600);
			return false;
		}
	}
});

// ===== Scroll to Top ==== 
/*
	jQ(window).scroll(function() {
			if (jQ(this).scrollTop() >= 600) {     // If page is scrolled more than 50px
				jQ('#return-to-top').fadeIn('slow');    // Fade in the arrow
			} else {
				jQ('#return-to-top').fadeOut('fast');   // Else fade out the arrow
			}
	});
*/
	jQ(function() {
		jQ('#return-to-top').click(function() {
			if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {

				var target = jQ(this.hash);
				target = target.length ? target : jQ('[name=' + this.hash.slice(1) +']');
				if (target.length) {
					jQ('html,body').animate({
						scrollTop: target.offset().top
					}, 1000);
					return false;
				}
			}
		});
	});
