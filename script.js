function showheader(){
    var x = document.getElementById("reveal");
    if (window.getComputedStyle(x).display === "none") {
        x.style.display = "initial";
        document.getElementById("header").style.height = "300px";
      }
    else {
        x.style.display = "none";
        document.getElementById("header").style.height = "60px";
    }
}

window.addEventListener('resize',function(event){
  var x = document.getElementById("icon");
  var y = document.getElementById("reveal");
  if (window.innerWidth < 650){
    x.style.display = "initial";
    y.style.display = "none";
    }
    if (window.innerWidth > 650){
      x.style.display = "none";
      y.style.display = "initial";
      }
    })

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
