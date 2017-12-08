var corbin = document.getElementById("corbin");
var icon = document.getElementById("icon");
var moves= document.getElementById ("moves")


window.onscroll = function(){

  behavior="{smooth}"

  var y = window.pageYOffset;

  console.log(y);

  corbin.style.top = -3000+ y * .9 + "px";
  corbin.style.left="400px"
  corbin.innerHTML = y + "px";

  if (y > 500) {
    corbin.style.WebkitTransform="rotate(60deg)"
    corbin.style.msTransform ="rotate(60deg)"
    corbin.style.transform="rotate(60deg)"
  }if (y > 1500 ){
    corbin.style.WebkitTransform="rotate(120deg)"
    corbin.style.msTransform ="rotate(120deg)"
    corbin.style.transform="rotate(120deg)"
  } if (y > 3000 ) {
    corbin.style.WebkitTransform="rotate(180deg)"
    corbin.style.msTransform ="rotate(180deg)"
    corbin.style.transform="rotate(180deg)"
  } if (y > 4500 ) {
    corbin.style.WebkitTransform="rotate(220deg)"
    corbin.style.msTransform ="rotate(220deg)"
    corbin.style.transform="rotate(220deg)"

} if (y > 6000 ) {
  corbin.style.WebkitTransform="rotate(260deg)"
  corbin.style.msTransform ="rotate(260deg)"
  corbin.style.transform="rotate(260deg)"
}if (y > 7500 ) {
  corbin.style.WebkitTransform="rotate(290deg)"
  corbin.style.msTransform ="rotate(290deg)"
  corbin.style.transform="rotate(290deg)"
}
if (y > 9000 ) {
  corbin.style.WebkitTransform="rotate(320deg)"
  corbin.style.msTransform ="rotate(320deg)"
  corbin.style.transform="rotate(320deg)"
}if (y > 10500 ) {
  corbin.style.WebkitTransform="rotate(340deg)"
  corbin.style.msTransform ="rotate(340deg)"
  corbin.style.transform="rotate(340deg)"
}if (y > 12000 ) {
  corbin.style.WebkitTransform="rotate(360deg)"
  corbin.style.msTransform ="rotate(360deg)"
  corbin.style.transform="rotate(360deg)"
}



};
