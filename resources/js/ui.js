var ui = {};

/*
  This will set up the site with the clicks. These could be added to the specific buttons themselves, but this ensures they actually work when loaded
*/
ui.init = function () {
  $('.rule').click(ui.showRules);
  // $('.settings').click(ui.showSettings);
  $('.custom_modal_close').click(ui.closeModal);

  $(window).resize(ui.boardSize);

  ui.makeBoard('player');
  ui.makeBoard('opponent');
  $('.opponent-area-container').hide();

  $('#button').click(ui.switchGameStates);
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


ui.makeBoard = function (boardID) {
  let $board = $('#' + boardID);
  let rowValue = ['0','A','B','C','D','E','F','G','H','I','J'];

  $board.empty();

  for(let rowCounter = 0; rowCounter < 11; rowCounter++) {
    let row = 'row' + rowValue[rowCounter];
    for(let colCounter = 0; colCounter < 11; colCounter++) {
      let col = 'col' + colCounter;
      let $newdiv = $('<div></div>' );

      $newdiv.addClass(row).addClass(col);

      if(rowCounter == 0 && colCounter ==0 ) {
        /* do nothing */
      } else if(rowCounter == 0 && colCounter > 0) {
        $newdiv.text(colCounter);
      } else if(rowCounter > 0 && colCounter == 0) {
        $newdiv.text(rowValue[rowCounter]);
      } else {
        $newdiv.addClass('empty');
      }

      $board.append($newdiv)
    }
  }

  ui.switchGameStates = function () {
    let $game = $('#game');

    if( $game.hasClass('start-game') ) {
      $game.removeClass('start-game');
      $game.addClass('play-game');
      $('.select-ships-container').hide();
      $('.opponent-area-container').show();
    } else {
      $game.removeClass('play-game');
      $game.addClass('start-game');
      $('.opponent-area-container').hide();
      $('.select-ships-container').show();
    }

  }
};
