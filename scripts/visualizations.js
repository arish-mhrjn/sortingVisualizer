var speed = 1000;
inp_aspeed.addEventListener("input", vis_speed);
let x = document.getElementById("audio");
function vis_speed() {
  var array_speed = inp_aspeed.value;
  switch (parseInt(array_speed)) {
    case 1:
      speed = 1;
      break;
    case 2:
      speed = 10;
      break;
    case 3:
      speed = 100;
      break;
    case 4:
      speed = 1000;
      break;
    case 5:
      speed = 10000;
      break;
  }
  delay_time = 10000 / (Math.floor(array_size / 10) * speed); // increase the speed by decreasing the numerator
}
var delay_time = 10000 / (Math.floor(array_size / 10) * speed); // increase the speed by decreasing the numerator

function div_update(cont, height, color) {
  window.setTimeout(function () {
    cont.style =
      " margin:0% " +
      margin_size +
      "%; width:" +
      (100 / array_size - 2 * margin_size) +
      "%; height:" +
      height +
      "%; background-color:" +
      color +
      ";";
    play();
  }, (c_delay += delay_time));
}
function enable_buttons() {
  window.setTimeout(function () {
    for (var i = 0; i < butts_algos.length; i++) {
      butts_algos[i].disabled = false;
      inp_as.disabled = false;
      inp_gen.disabled = false;
      inp_aspeed.disabled = false;
    }
  }, (c_delay += delay_time));
}
function play() {
  x.play();
}
