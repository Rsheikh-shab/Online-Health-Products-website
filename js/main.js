
//slide showPage

var idd=setTimeout(next,0);
var id=setInterval(next,3000);
var index = 1;
function next() {
  nextSlide(1);
}
function nextSlide(n) {
  showSlide(index+=n);
}
function presentSlide(n) {
  showSlide(index=n);
}

function showSlide(n) {
  var slides = document.getElementsByClassName("slides");
  var points = document.getElementsByClassName("point");
  if (n > slides.length) {index = 1}
  if (n < 1) {index = slides.length}
  for (var i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (var i = 0; i < points.length; i++) {
      points[i].className = points[i].className.replace(" active", "");
  }
  slides[index-1].style.display = "block";
  points[index-1].className += " active";
}
function loader() {
  var loaderId=setInterval(showPage,1000);
}
function showPage(){
  document.getElementById("loaderDiv").style.display="none";
  document.getElementById("mainDiv").style.display="block";
}
function popUpClose(){
  document.getElementById("loginDiv").style.display="none";
//  alert("dd");
}

function showPopUp(){
  //alert("");
  document.getElementById("loginDiv").style.display="block";
}
