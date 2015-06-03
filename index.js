(function(){

  'use strict';

  var win = $(window),
      targets = $('.frame > div'),
      threshold = win.height() / 3 >> 0,
      thresholdHeight = 50,
      animating = false;

  // please use throttle()
  win.on('scroll', function(event) {
    var scrollTop = win.scrollTop();

    targets.each(function() {
      var that = $(this),
          offset;

      if (that.hasClass('js-animated') ||
          that.hasClass('velocity-animating')) {
        return;
      }

      offset = that.offset();

      if (offset.top > scrollTop + threshold &&
          offset.top < scrollTop + threshold + thresholdHeight) {
        that.velocity({
          opacity: 1,
          translateY: [0, 100]
        }, {
          duration: 'normal',
          complete: function() {
            that.addClass('js-animated');
          }
        });
      }
    });
  });

  $(function(){

    // set threshold border position
    $('.threshold').css({
      height: thresholdHeight,
      top: threshold
    });

    // scroll to top
    $('body').velocity('scroll', {
      duration: 0
    });

  });

}());
