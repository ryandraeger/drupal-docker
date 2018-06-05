(function ($) {
  $init = {
    init: function () {
      $(document).ready(function (e) {
        // initialization of carousel
        $.HSCore.components.HSCarousel.init('.js-carousel');
      });
    }
  };
  $init.init();
})(jQuery);