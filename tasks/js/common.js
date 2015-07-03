"use strict";

//initialize Parse library with your application ID and your app's JavaScript library key
Parse.initialize('LIjNYShhxKFpFoWLQyrullonwBLhUJghO27ps5PW', 'LBochtiHAeeZ5Il1i3X1ckf3TThikhAyAVEXYXTv');

/**
 * Shows an error in an element on the page with the class 'error-message'
 * @param err {Object} the error to be shown
 */
function showError(err) {
    $('.error-message').html(err.message).fadeIn();
}

/**
 * Clears any currently showing error
 */
function clearError() {
    $('.error-message').fadeOut().empty();
}
