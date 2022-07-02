const currentYear = new Date().getFullYear();

console.log(currentYear);

document.getElementById("year").innerHTML= currentYear;

var myCarousel = document.querySelector('#myCarousel')
var carousel = new bootstrap.Carousel(myCarousel, {
  interval: 2000,
  wrap: false
})


$('.favorite').click(function() {
  $('#favorite-o').html(function(i, val) { return val*1+1 });
});

$('.cart').click(function() {
  $('#shoping-o').html(function(i, val) { return val*1+1 });
});

 // Create cookie
function setCookie(cname, cvalue, sec) { 
  const d = new Date();
  d.setTime(d.getTime() + (sec*1000));
  let expires = "expires="+ d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}


// Delete cookie
function deleteCookie(cname) {
  const d = new Date();
  d.setTime(d.getTime() + (24*60*60*1000));
  let expires = "expires="+ d.toUTCString();
  document.cookie = cname + "=;" + expires + ";path=/";
}

// Read cookie
function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i <ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
          c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
          return c.substring(name.length, c.length);
      }
  }
  return "";
}


// Set cookie consent
function acceptCookieConsent(){
  deleteCookie("cb-cookie-banner");
  setCookie("cb-cookie-banner", 1, 10);
  document.getElementById("cb-cookie-banner").style.display = "none";
}

let cookie_consent = getCookie("cb-cookie-banner");
if(cookie_consent != ""){
    document.getElementById("cb-cookie-banner").style.display = "none";
}else{
    document.getElementById("cb-cookie-banner").style.display = "block";
}


