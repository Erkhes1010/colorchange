var colors = ["red", "blue", "green", "brown", "purple"];
var body = document.getElementsByTagName("body")[0];
var btn = document.getElementsByTagName("button")[1];
var i = -1;
function changeColor() {
  i++;
  if (i > colors.length - 1) {
    i = 0;
  }
  body.style.backgroundColor = colors[i];
  btn.innerText = colors[i];
}
function backColor() {
  i--;
  if (i < 0) {
    i = colors.length - 1;
  }
  body.style.backgroundColor = colors[i];
}
// setTimeout -> func heden millisecond daraa ajilhiig tohiruulna 1000ms=1s
var up;
function auto() {
  i++;
  if (i > colors.length - 1) {
    i = 0;
  }
  body.style.backgroundColor = colors[i];
  up = setTimeout(auto, 1000);
}
// clearTimeout -> zogsoono
function stop() {
  clearTimeout(up);
}
