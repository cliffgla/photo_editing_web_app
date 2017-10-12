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


var slider = document.getElementById('brightSlide');
var output = document.getElementById('brightness-value');
output.innerHTML = slider.value;

slider.oninput = function() {
    output.innerHTML = this.value;

}

var slider = document.getElementById('contrastSlide');
var output = document.getElementById('contrast-value');
output.innerHTML = slider.value;

slider.oninput = function() {
    output.innerHTML = this.value;

}

var slider = document.getElementById('saturationSlide');
var output = document.getElementById('saturation-value');
output.innerHTML = slider.value;

slider.oninput = function() {
    output.innerHTML = this.value;

}
