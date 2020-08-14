// All code and comments were written by Jinyong Park.
// it turns out that this is for learning purposes only and not commercial

$(document).ready(function() {
  getCookieMobile();
  $(".pop-up-close-button").click(function() {
    event.preventDefault();
    event.stopPropagation();
    setCookieMobile("todayCookie", "done", 1);
    $(".pop-up-wrapper").hide();
  })
});

function setCookieMobile( name, value, expiredays) {
  var todayDate = new Date();
  todayDate.setDate( todayDate.getDate() + expiredays );
  document.cookie = name + "=" + escape(value) + "; path=/; expires=" + todayDate.toGMTString() + ";"
}

function getCookieMobile() {
  var cookieData = document.cookie;
  if (cookieData.indexOf("todayCookie=done") < 0) {
    $(".pop-up-wrapper").show();
  } 
  else {
    $(".pop-up-wrapper").hide();
  }
}

// auto compelete on / off function
var autoCompelete = false;

//is this @param's area?
$('html').click(function(e) {
  if (!$(e.target).closest(".search-form")[0]) showOffAutoComplete()
});

//when #main-input key-down event
//if #main-input value is not empty, show auto Complete
//if not, not show auto Complete
$('#main-input').keyup(function(e) {
  if ($("#main-input").val() !== "") showAutoComplete();
  else showOffAutoComplete();
})

//show auto-complete
function showAutoComplete() {
  autoCompelete = true;
  $(".down-arrow").addClass('reverse');
  $(".auto-input-wrapper").css('display', 'block');
}

function showOffAutoComplete() {
  autoCompelete = false;
  $(".down-arrow").removeClass('reverse');
  $(".auto-input-wrapper").css('display', 'none');
}

$(".down-arrow").click(function(){
  showAutoComplete();
});

$(".reverse").click(function(){
  showOffAutoComplete();
})


