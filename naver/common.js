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

$(document).ready(function() {
  $(".down-arrow").click(function(){
    event.preventDefault();
    event.stopPropagation();
    console.log(1);
    autoCompelete = !autoCompelete;
    console.log(autoCompelete);
    if (autoCompelete) {
      $(".down-arrow").addClass('reverse');
      $(".auto-input-wrapper").css('display', 'block');
    } else {
      $(".down-arrow").removeClass('reverse');
      $(".auto-input-wrapper").css('display', 'none');
    }
  });
});


