var ui = {};

/*
  This will set up the site with the clicks. These could be added to the specific buttons themselves, but this ensures they actually work when loaded
*/
ui.init = function () {
  $('.rule').click(ui.showRules);
  // $('.settings').click(ui.showSettings);
  $('.custom_modal_close').click(ui.closeModal);

  $(window).resize(ui.boardSize);
};

/*
  Displays the modal. callback is a function. It will execute after everything is loaded. This is a way to populate stuff in to the infused HTML.
*/
ui.openModal = function (callback) {
  $('.custom_block_page').fadeIn(600);
  $('.custom_modal_box').fadeIn(600, callback);
};

/*
  Closes the modal. This will also clear everything out of the modal so that nothing is appended and the show functions don't have to worry about it.
*/
ui.closeModal = function () {
  $('.custom_modal_box').fadeOut();
  $('.custom_block_page').fadeOut( function () {
    $('.custom_inner_modal_box').empty();
  } );
}

/******************************** Rules Dialog ********************************/
/*
  loads the rules text in to the dialog and displays it. This does not have an additional close button function.
*/
ui.showRules = function () {
  $('.custom_inner_modal_box').load('./resources/html/rules.html');

  ui.openModal();
};
