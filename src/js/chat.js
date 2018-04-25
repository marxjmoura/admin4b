(function ($) {

  $.fn.chat = function () {
    return this.each(function () {
      var $window = $(window);
      var $appContent = $('.app-content');
      var $chat = $(this);
      var $chatMessages = $chat.find('.chat-messages');

      $window.on('resize', function () {
        var usedHeight = 0;

        $appContent.children().each(function () {
          if ($(this).is('.chat')) return;
          usedHeight += $(this).outerHeight(true); // true = include margins
        });

        $chat.height($appContent.height() - usedHeight);
        $chat.addClass('chat-on');

        $chatMessages.scrollToBottom();
      });

      $window.trigger('resize');
    });
  };

})(jQuery);
