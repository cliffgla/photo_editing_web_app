//Toggle editing windows
/*
function toggle(id) {
    var x = document.getElementById(id);
    console.log(x.style.display)
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }

}

*/


var slider1 = document.getElementById('brightSlide');
var output1 = document.getElementById('brightness-value');
output1.innerHTML = slider1.value;

slider1.oninput = function() {
    output1.innerHTML = this.value;

}

var slider2 = document.getElementById('contrastSlide');
var output2 = document.getElementById('contrast-value');
output2.innerHTML = slider2.value;

slider2.oninput = function() {
    output2.innerHTML = this.value;

}

var slider3 = document.getElementById('saturationSlide');
var output3 = document.getElementById('saturation-value');
output3.innerHTML = slider3.value;

slider3.oninput = function() {
    output3.innerHTML = this.value;

}
