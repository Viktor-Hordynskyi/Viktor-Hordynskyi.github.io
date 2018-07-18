$(document).ready(function() {
  var $filterType = $('#works_filter li.active a').attr('class');
  var $holder = $('div.works_images');
  var $data = $holder.clone();
  $('#works_filter li a').click(function(e) {
    $('#works_filter li').removeClass('active');
    var $filterType = $(this).attr('class');
    $(this).parent().addClass('active');
    if ($filterType == 'all') {
      var $filteredData = $data.find('div');
    } else {
      var $filteredData = $data.find('div[data-type=' + $filterType + ']');
    }
    $holder.quicksand($filteredData, {
    	duration: 800,
    });
    return false;
  });

  // add hover effect to pricing blocks
  $('.pricing_plans__button').hover(function() {
  	$(this).css({'background-color' : '#e74c3c', 'font-weight' : '500'});
  	$(this).parent().siblings('.pricing_plans__item_header').css({'background-color' : '#e74c3c'});
  	$(this).parent().siblings().find('.pricing_plans__price').css({'color' : '#e74c3c'});
  }, function() {
  	$(this).css({'background-color' : '#999999', 'font-weight' : '500'});
  	$(this).parent().siblings('.pricing_plans__item_header').css({'background-color' : '#999999'});
  	$(this).parent().siblings().find('.pricing_plans__price').css({'color' : '#999999'});
  });

  // add hover effect to team face icon
  $('.team_person img').hover(function() {
  	$(this).siblings('.team_person__container_post').css({'opacity' : '1'});
  }, function() {
  	$(this).siblings('.team_person__container_post').css({'opacity' : '0'});
  });

  // initialization WOW.JS
  new WOW().init();

  // Scroll to top
  $(window).on('scroll load', function () {
  	if ($(this).scrollTop() > 1000) {
  		$('#back-to-top').fadeIn();
  		$('#back-to-top').css({'display' : 'flex'});
  	} else {
  		$('#back-to-top').fadeOut();
  	}
  });

  // animate link back to top
  $('a#back-to-top').on('click', function(){
  	$('html, body').stop().animate({scrollTop:0}, 500, "linear");
  })

  // animate links - anchor(#)
  $('a').on('click', function(){
  	var anchor = $(this);
  	$('html, body').stop().animate({
  		scrollTop: $(anchor.attr('href')).offset().top
  	}, 1500, 'linear')
  	event.preventDefault();
  })

	// hide navbar-menu when clicking to the menu item
  $('#navbarMenu').click(function() {
		if($(this).attr('class') == 'navbar-collapse justify-content-end collapse show') {
			$(this).attr('class', 'navbar-collapse justify-content-end collapse');
			$('#navbar-btn').attr('class', 'navbar-toggler collapsed');
			$('#navbar-btn').attr('aria-expanded', 'false');
		}		
	});
});