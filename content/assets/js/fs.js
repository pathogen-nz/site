(function ($) {
  $(document).ready(function () {
  
    $(window).on('scroll', function() {
      if($(window).scrollTop() > 200) $('body').addClass('scrolled')
      else $('body').removeClass('scrolled')
    });
    
    $('.scroll-to-top').click(function() { 
      $('html, body').animate({scrollTop : 0},400);
    });
 
    $("#toc-ul").find('a').click(function() { 
      if($('#oc-right').hasClass('shown')) fsOcHide('right');
    }); 

    $('.oc-toggle.left').click(function () {
      $('#oc-left').css({ side : "inherit" })
      if($('#oc-right').hasClass('shown')) fsOcHide('right')
      fsOcToggle('left')
    });
  
    $('.oc-toggle.right').click(function () {
      if($('#oc-left').hasClass('shown')) fsOcHide('left') 
      fsOcToggle('right')
    });
  
    $('.oc-overlay').click(function () {
      fsOcHide('left')
      fsOcHide('right')
    });
  
    function fsOcShow(side) {
      $('#oc-'+side).addClass('shown')
      $('.oc-overlay').addClass(side)
      $('.fade-oc').addClass('faded')
      $('body').addClass('oc-shown oc-'+side+'-shown')
    }
  
    function fsOcHide(side) {
      $('.oc-overlay').removeClass(side)
      $('#oc-'+side).removeClass('shown')
      $('.fade-oc').removeClass('faded')
      $('body').removeClass('oc-shown').removeClass('oc-'+side+'-shown')
    }
  
    function fsOcToggle(side) {
      if($('#oc-'+side).hasClass('shown')) fsOcHide(side)
      else fsOcShow(side) 
    }
 });
}(jQuery));
