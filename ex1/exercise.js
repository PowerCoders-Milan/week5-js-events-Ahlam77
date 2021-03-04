var a = document.querySelector('a')
 function changeBoldColor() {
  var str = document.querySelectorAll('strong');
  for (var i= 0; i < str.length; i++) {
    str[i].style.color = "blue";
  }
}
a.addEventListener('mouseenter', changeBoldColor);
a.removeEventListener ("mouseleave", color);
for (var i= 0; i < str.length; i++) {
    str[i].style.color = "white";
  }
