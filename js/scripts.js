$(document).ready(function(){
  $('#opinions-slider').bxSlider({
			mode: 'vertical',
			auto: true,
			controls: false,
			pager: false
		});
  $('#main-slider').bxSlider({
			mode: 'horizontal',
			auto: true,
			controls: false,
			pager: false
		});
});
$(function() {  
  $('.hideonload').hide().fadeIn(3000, function() {});
});
$(document).ready(function() {
    
    
    /* Every time the window is scrolled ... */
    $(window).scroll( function(){
    
        /* Check the location of each desired element */
        $('.hideme').each( function(i){
            
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > bottom_of_object ){
                
                $(this).animate({'opacity':'1'},500);
                    
            }
            
        }); 
    
    });    
});
lightbox.option({
      'resizeDuration': 200,
      'wrapAround': true
    })

$(".progress").each(function(){

  var $bar = $(this).find(".bar");
  var $val = $(this).find("span");
  var perc = parseInt( $val.text(), 10);

  $({p:0}).animate({p:perc}, {
    duration: 3000,
    easing: "swing",
    step: function(p) {
      $bar.css({
        transform: "rotate("+ (45+(p*1.8)) +"deg)", // 100%=180° so: ° = % * 1.8
        // 45 is to add the needed rotation to have the green borders at the bottom
      });
      $val.text(p|0);
    }
  });
});