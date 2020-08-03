var tests = 1;

// function test() {
//   event.preventDefault();
//   event.stopPropagation();
//   $(".pop-up-wrapper").css('display', 'none');
// }


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
  console.log(escape(value), '<==============');
  todayDate.setDate( todayDate.getDate() + expiredays );
  document.cookie = name + "=" + escape(value) + "; path=/; expires=" + todayDate.toGMTString() + ";"
  console.log(document.cookie, '<==============');
}

function getCookieMobile() {
  console.log(2);
  var cookieData = document.cookie;
  if (cookieData.indexOf("todayCookie=done") < 0) {
    console.log('cookie not exists');
    $(".pop-up-wrapper").show();
  } 
  else {
    $(".pop-up-wrapper").hide();
    console.log('cookie exists');
  }
}
