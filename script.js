function showheader(){
    var x = document.getElementById("reveal");
    if (window.getComputedStyle(x).display === "none") {
        x.style.display = "initial"
      }
    else {
        x.style.display = "none" 
    }
}

window.addEventListener('resize',function(event){
    var x = document.getElementById("icon")
    var y = document.getElementById("reveal")
    if(window.getComputedStyle(x).display === "none"&&window.getComputedStyle(y).display === "none"){
      y.style.display = "initial"
    }})

    //Fade Element
function fade(element) {
  //Disable
  // element.disabled = true;
  //Fade
  var op = 1;  // initial opacity
  var timefade = setInterval(function () {
      if (op <= 0.1){
          clearInterval(timefade);
          element.style.display = 'none';
      }
      element.style.opacity = op;
      element.style.filter = 'alpha(opacity=' + op * 100 + ")";
      op -= op * 0.1;
  }, 20);
}

//Unfade Element
function unfade(element) {
//Enable
// element.disabled = false
//Unfade
setTimeout(()=>{var op = 0.1;  // initial opacity
  element.style.display = 'block';
  var timeunfade = setInterval(function () {
      if (op >= 1){
          clearInterval(timeunfade);
      }
      element.style.opacity = op;
      element.style.filter = 'alpha(opacity=' + op * 100 + ")";
      op += op * 0.2;
  }, 20);
},500)}

/****************** SlideshowA *********************/
/*slideIndexA**showSlidesA**plusSlidesA**mySlidesA**/
/**currentSlideA********************************** */

let slideIndexA = 1;
showSlidesA(slideIndexA);

function plusSlidesA(n) {
  showSlidesA(slideIndexA += n);
}

function currentSlideA(n) {
  showSlidesA(slideIndexA = n);
}

function showSlidesA(n) {
  let i;
  let slides = document.getElementsByClassName("mySlidesA");
  let dots = document.getElementsByClassName("demoA");
  let captionText = document.getElementById("captionA");
  if (n > slides.length) {slideIndexA = 1}
  if (n < 1) {slideIndexA = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndexA-1].style.display = "block";
  dots[slideIndexA-1].className += " active";
  captionText.innerHTML = dots[slideIndexA-1].alt;
}

function autoslide(){
setInterval(plusSlidesA(), 2000)

}
/*****************End SlideshowA********************/