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
