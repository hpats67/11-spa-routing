(function(module) {
  var aboutController = {};

  aboutController.reveal = function() {
    /* DONE: Reveal only the about section! */
    $('.tab-content').hide();
    $('#about').fadeIn();
  };

  module.aboutController = aboutController;
})(window);
