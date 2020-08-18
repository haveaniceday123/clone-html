/**
 * 
 * it turns out that this is for learning purpose only and not commercial.
 * @author Jinyong park.
 */

 var popUpCookieName = "pop-up-banner";

/**
 * when all the documents are ready, decide whether to show the 
 * banner or not.
 */
$(document).ready(function () {
  var autoCompelete = $('.pop-up-wrapper');
  if (getCookie(popUpCookieName)) {
    autoCompelete.hide();
  } 
  else {
    autoCompelete.show();
  }
});

/**
 * when button click, "not showing 3 days" event
 * event prevents and close pop-up-banner.
 */
$('.pop-up-close-button').click(function(event) {
  eventPrevent(event);
  setCookie(popUpCookieName, "ok", 1);
  $('.pop-up-wrapper').hide();
})

/**
 * user key press enter, the input saving .txt file;
 */
$('#main-input').keydown(function(event) {
  if (event.keyCode === 13) {
    console.log('enter inputed');
  }
})

/**
 * 
 * @param {*} name cookie name for searching
 * @return {object} object contain key, value. if not contain, it will return false
 */
function getCookie(name) {
  var currentSavingCookie = isHasCookieData(name);
  if (currentSavingCookie === undefined) return false;
  var splitResult = currentSavingCookie.split("=");

  return {
    key: splitResult[0],
    value: splitResult[1],
  };
}

/**
 * 
 * @param {*} name cookie's key
 * @returns {string} it will return cookie that has "name"
 */
function isHasCookieData(name) {
  var cookieData = document.cookie.replace(/;/g, "").split(" ");
  var cookieSplitKeyValue = cookieData.find((cookie) => {
    var splitKeyValue = cookie.split("=");
    return splitKeyValue[0] === name;
  })
  return cookieSplitKeyValue;
}

/**
 * Save cookie data
 * @param {*} name cookie data name;
 * @param {*} value cookie data value;
 * @param {*} expire cookie data's Expiration date (per minutes)
 */
function setCookie(name, value, expire) {
  var expireDate = new Date();
  expireDate.setMinutes(expireDate.getMinutes() + expire);
  document.cookie =
    escape(name) +
    "=" +
    escape(value) +
    "; path=/; expires=" +
    expireDate.toGMTString() +
    ";";
}

/**
 * Prevent event propagtion
 */
function eventPrevent(event) {
  event.preventDefault();
  event.stopPropagation();
}






















var autoCompelete = false;

//is this @param's area?
$("html").click(function (e) {
  if (!$(e.target).closest(".search-form")[0]) showOffAutoComplete();
});

//when #main-input key-down event
//if #main-input value is not empty, show auto Complete
//if not, not show auto Complete
$("#main-input").keyup(function (e) {
  if ($("#main-input").val() !== "") showAutoComplete();
  else showOffAutoComplete();
});

//show auto-complete
function showAutoComplete() {
  autoCompelete = true;
  $(".down-arrow").addClass("reverse");
  $(".auto-input-wrapper").css("display", "block");
}

function showOffAutoComplete() {
  autoCompelete = false;
  $(".down-arrow").removeClass("reverse");
  $(".auto-input-wrapper").css("display", "none");
}

$(".down-arrow").click(function () {
  showAutoComplete();
});

$(".reverse").click(function () {
  showOffAutoComplete();
});
