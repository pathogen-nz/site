var jQuery = require('jquery');
(function ($) {
  const doc = (typeof document !== "undefined") ? $(document) : null
  if (doc) {
    $(document).ready(function () {
    
      $(window).on('scroll', function() {
        if($(window).scrollTop() > 200) $('body').addClass('scrolled')
        else $('body').removeClass('scrolled')
      });
      
      $('.scroll-to-top').click(function() { 
        $('html, body').animate({scrollTop : 0},400);
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
        if(side === 'left') {
          $('#hamburger-icon').removeClass('icon-menu').addClass('icon-close-left');
        } else if (side === 'right') {
          $('#tocburger-icon').removeClass('icon-toc').addClass('icon-close-right');
        }
        $('#oc-'+side).addClass('shown')
        $('.oc-overlay').addClass(side)
        $('.fade-oc').addClass('faded')
        $('body').addClass('oc-shown oc-'+side+'-shown')
      }
    
      function fsOcHide(side) {
        if(side === 'left') {
          $('#hamburger-icon').removeClass('icon-close-left').addClass('icon-menu');
        } else if (side === 'right') {
          $('#tocburger-icon').removeClass('icon-close-right').addClass('icon-toc');
        }
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
  }
}(jQuery));
