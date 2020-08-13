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
