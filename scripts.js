//Toggle editing windows
function toggle(id) {
    var x = document.getElementById(id);
    console.log(x.style.display)
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }

}


var slider = document.getElementById('brightSlide');
var output = document.getElementById('range-value');
output.innerHTML = slider.value;

slider.oninput = function() {
    output.innerHTML = this.value;

}
