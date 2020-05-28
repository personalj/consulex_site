$(document).ready(function() {
	$('[data-opener]').click(function() {
			$this = $(this);
			if($this.is('.active')) {
				$this.removeClass('active');
				$('[data-target="'+$this.data('opener')+'"]').removeClass('active');
			}else{
				$this.addClass('active');
				$('[data-target="'+$this.data('opener')+'"]').addClass('active');
			}
	});
	// new WOW().init();
	 $(".hero-slider__list").lightSlider({
	 	item: 1,
	 	autoWidth: false,
	 	slideMove: 1,
	 	loop: true
	 });
	 $(".case-single__slider-list").lightSlider({
	 	item: 1,
	 	autoWidth: false,
	 	slideMove: 1,
	 	loop: true
	 });
	 $(".news__slider").lightSlider({
	 	item: 1,
	 	autoWidth: false,
	 	slideMove: 1,
	 	loop: true
	 });
	 $(".testimonials__list").lightSlider({
	 	item: 2,
	 	autoWidth: false,
	 	slideMove: 1,
	 	loop: true,
	 	slideMargin: 30,
    	responsive : [ 
    	    {
    	        breakpoint:991,
    	        settings: {
    	        item:1
    	                 }
    	            }
    	    ]
	 });
	 $('.media-gallery__list').lightSlider({
	    gallery:true,
	    item:1,
	    loop:true,
	    thumbItem:7,
	    slideMargin:0,
	    enableDrag: false,
	    currentPagerPosition:'left',
	    responsive : [ 
	        {
	            breakpoint:544,
	            settings: {
	            thumbItem:4
	                     }
	                },
	            {
	                breakpoint:400,
	                settings: {
	                thumbItem:3
	                         }
	                    }

	        ],
	    onSliderLoad: function(el) {
	        el.lightGallery({
	            selector: '.media-gallery__list .lslide'
	        });
	    }   
	 });  
	 // var $grid = $('.portfolio__wrapper').imagesLoaded( function() {
	 //    $grid.isotope({
	 //     	itemSelector: '.portfolio__item',
	 //     	percentPosition: true,
	 //    });
	 // });
	 // $grid.isotope({
	 //    itemSelector: '.portfolio__item',
	 //    layoutMode: 'fitRows',
	 //        // fitRows: {
	 //       	//    gutter: 30
	 //       	// }

	 // });
	 // $('.portfolio__controller-item').click(function(){
	 // 	$('.portfolio__controller-item').removeClass('active');
	 // 	$(this).addClass('active');
	 // 	var selector = $(this).attr('data-filter');
	 // 	$grid.isotope({
	 // 		filter: selector
	 // 	});
	 // 	return false;
	 // });
	 // $('.tabs-link').on('click', function(e) {
	 // 	e.preventDefault();
	 // 	var item = $(this).closest('.tabs-controler'),
	 // 		contentWrapper = item.closest('.tabs'),
	 // 		contentItem = contentWrapper.find('.tabs-target'),
	 // 		itemPosition = item.data('class');

	 // 	contentItem.filter('.tabs-target_' + itemPosition)
	 // 	.add(item)
	 // 	.addClass('active')
	 // 	.siblings()
	 // 	.removeClass('active');
	 // });
	 $('.accodeon-link').on('click', function(e) {
	 	e.preventDefault();
	 	var item = $(this).closest('.accodeon-item'),
	 		contentWrapper = item.closest('.accordeon'),
	 		items = contentWrapper.find('.accodeon-item'),
	 		contentItem = item.find('.accodeon-inner'),
	 		contentItems = contentWrapper.find('.accodeon-inner');

		 if(!item.hasClass('active')) {
		 	items.removeClass('active');
		 	item.addClass('active');
		 	contentItems.stop(true, true).slideUp(300);
		 	contentItem.stop(true, true).slideDown(300);
		 }else {
		 	contentItem.stop(true, true).slideUp(300);
		 	item.removeClass('active');
		 }
	 });
	 
	var $grid = $('.portfolio__wrapper').imagesLoaded( function() {
	    	  $grid.isotope({
	    	    itemSelector: '.portfolio__item',
	    	    percentPosition: true,
	    	  });
	    	});
	    $grid.isotope({
	       itemSelector: '.portfolio__item',
	       layoutMode: 'fitRows',
	       // fitRows: {
	      	//    gutter: 30
	      	// }

	    });
	    $('.portfolio__controller-item').click(function(){
			$('.portfolio__controller-item').removeClass('active');
			$(this).addClass('active');
			var selector = $(this).attr('data-filter');
			$grid.isotope({
				filter: selector
			});
			return false;

		});
	if ( ! Modernizr.objectfit ) {
		  $('.object-fit').each(function () {
		    var $container = $(this),
		        imgUrl = $container.find('img').prop('src');
		    if (imgUrl) {
		      $container
		    .css('backgroundImage', 'url(' + imgUrl + ')')
		    .addClass('compat-object-fit');
		   }  
		});
	}

	AOS.init();
	// (function(){
	// 	var show = true;
	// 	    // var countbox = ".features";
	// 	   $(window).on("scroll load resize", function(){
	// 	       if(!show) return false;
	// 	       if($('.team__member-wrapper').length){
	// 	       	 var e_top = $(".team__member-wrapper").offset().top;
	// 	       	 var e_height = $(".team__member-wrapper").outerHeight();
	// 	       }                
	// 	       var w_top = $(window).scrollTop();       
		         
	// 	       var w_height = $(window).height();       
	// 	       var d_height = $(document).height();      
	// 	      if(w_top + 500 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height){
	// 	      		$('.team__member-skills-item').addClass('active', function() {
		      			
	// 	           });
	// 	       };
	// 	});
	// }());
	$('.team__member-skills-bar-inner').each(function() {
	  var $this=$(this);
	  var item=$this.closest('.team__member-skills-item');
	  var number=item.find('.team__member-skills-percentage').text();
	  var container = $this.closest('.team__member-wrapper');
	  $this.css('width', number );
	  // var width = 0;
	  // var timerId = setInterval(function() {
	  // 	if (width <= number) { 
	  // 		$this.css('width', width++ +"%"); 
	  // 	}else {   
	  // 		clearInterval(timerId);

	  // 	}    
	  // 	}, 5);
	});
	$('.tabs-link').on('click', function(e) {
		 	e.preventDefault();
	    var $this=$(this),
	        item = $this.closest('.tabs-controler'),
	        contentWrapper = item.closest('.tabs'),
	        contentItem = contentWrapper.find('.tabs-target'),
	        itemPosition = item.data('class'),
	        width = 0,
	        itemActive = contentItem.filter('.active'),
	        skills = contentItem.find('.team__member-skills-bar-inner');
	    skills.each(function() {
		  var $this=$(this);
		  var item=$this.closest('.team__member-skills-item');
		  var number=item.find('.team__member-skills-percentage').data('skills');
		  var container = $this.closest('.team__member-wrapper');
		  var timerId = setInterval(function() {
		  	if (width <= number) { 
		  		$this.css('width', width++ +"%"); 
		  	}else {   
		  		clearInterval(timerId);
	        // width = 0;

		  		}       
		  	}, 25);
		  });
		 	contentItem.filter('.tabs-target_' + itemPosition)
		 	.add(item)
		 	.addClass('active')
		 	.siblings()
		 	.removeClass('active');
	  
	  
		 });
	// $('.tabs-link').on('click', function(e) {
	// 	 	e.preventDefault();
	// 	 	var item = $(this).closest('.tabs-controler'),
	// 	 		contentWrapper = item.closest('.tabs'),
	// 	 		contentItem = contentWrapper.find('.tabs-target'),
	// 	 		itemActive = contentItem.filter('.active');
	     
	// 	});
	// });   
	$('.team__member-skills-bar-inner').each(function() {
		  var $this=$(this),
	 item=$this.closest('.team__member-skills-item'),
	 number=item.find('.team__member-skills-percentage').data('skills'),
	    width;
		  $this.css('width', number +"%");;
	});
		// $('.team__member-wrapper.active').each(function() {
			
		// });
		

		  // var timer = setInterval(funcrion(){
		  // 	if (width <= number) {
		  // 		$this.css('width', width++); 
		  // 	}else {
		  // 		 clearInterval(timer);
		  // 	}
		  // }, 1);
		 
		  // $this.css('width', number);  
		// });	
	
	// $(window).on("scroll load resize", function(){
	// var countbox = $(".features__item");     
	// var w_top = $(window).scrollTop();       
	// var e_top = countbox.offset().top;    
	// var w_height = $(window).height();       
	// var d_height = $(document).height();      
	// var e_height = countbox.outerHeight();
	//  if(w_top + 50 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height){
	//     $('.features__item').addClass('active');
	     
	//   }else {
	//   	$('.features__item').removeClass('active');
	//   }

	// });
	// (function(){
	// 	var show = true;
	// 	    // var countbox = ".features";
	// 	   $(window).on("scroll load resize", function(){
	// 	       if(!show) return false;
	// 	       if($('.team__member-wrapper').length){
	// 	       	 var e_top = $(".team__member-wrapper").offset().top;
	// 	       	 var e_height = $(".team__member-wrapper").outerHeight();
	// 	       }                
	// 	       var w_top = $(window).scrollTop();       
		         
	// 	       var w_height = $(window).height();       
	// 	       var d_height = $(document).height();
	// 	       // var container = $(".team__member-wrapper.active");
	// 	       // var itemActive = containerActive.find(".team__member-skills-bar-inner");
	// 	      if(w_top + 300 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height){
	// 	      	     // var itemActive = container.find(".team__member-skills-bar-inner");
	// 	      	     // console.log(itemActive);
	// 	      	     $(".team__member-skills-bar-inner").each(function() {
	// 	      	     var $this=$(this);
	// 	      	     var item=$this.closest('.team__member-skills-item');
	// 	      	     var number=item.find('.team__member-skills-percentage').data('number');
	// 	      	     var container = $this.closest('.team__member-wrapper');
	// 	      	     // var width = 0;
	// 	      	     $this.css('width', number +"%");
	// 	      	     // if(container.hasClass('active')) {
	// 	      	     // 	var timerId = setInterval(function() {
	// 	      	     // 		if (width <= number) { 
	// 	      	     // 			$this.css('width', width++ +"%"); 
	// 	      	     // 		}else {   
	// 	      	     // 			clearInterval(timerId);

	// 	      	     // 		}    
	// 	      	     // 		}, 5);
	// 	      	     // }
		      	    
	// 	      	   });
		           	 
	// 	           show = false;
	// 	       }
	// 	});
	// }());



	(function(){
		var show = true;
		    // var countbox = ".features";
		   $(window).on("scroll load resize", function(){
		       if(!show) return false;
		       if($('.features').length){
		       	 var e_top = $(".features").offset().top;
		       	 var e_height = $(".features").outerHeight();
		       }                
		       var w_top = $(window).scrollTop();       
		         
		       var w_height = $(window).height();       
		       var d_height = $(document).height();      
		      if(w_top + 300 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height){
		           $('.features__item').each(function()  {
		           	  var $this = $(this), 
		           	      // numberText = number.text(),
		           	  numberData = $this.find('.features__item-number').data('number');
		           	  var number =$this.find('.features__item-number');
		           	  var x = 0;
		           	 
		           	  var timerId = setInterval(function() {
		           	  if (x <= numberData) { 
		           	    number.html(x++);
		           	  }else {   
		           	    clearInterval(timerId);

		           	  }    
		           	 }, 1);

		           	});	
		           show = false;
		       }
		});
	}());


});
