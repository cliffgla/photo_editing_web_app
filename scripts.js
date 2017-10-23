var brightVal;

var contrastVal;

var satVal;

$("input[value]").change(function() {
    //brightness control
    brightVal = $("#brightness-input").val();
    pVal = parseInt(brightVal);
    console.log(brightVal);

    brightVal = (pVal+10)/10.0;

    $("#brightness-value").html("<p>"+ pVal + "</p>");
    $("#image-load").css("filter", "brightness("+ brightVal +") contrast("+ contrastVal +") saturate(" + satVal + ")");

    //contrast control
    contrastVal = $("#contrast-input").val();
    pVal = parseInt(contrastVal);
    console.log(contrastVal);

    contrastVal = (pVal+10)/10.0;

    $("#contrast-value").html("<p>"+ pVal + "</p>");
    $("#photo img").css("filter", "brightness("+ brightVal +") contrast("+ contrastVal +") saturate(" + satVal + ")");

    //saturation control
    satVal = $("#saturation-input").val();
    pVal = parseInt(satVal);
    console.log(contrastVal);

    satVal = (pVal+10)/10.0;

    $("#saturation-value").html("<p>"+ pVal + "</p>");
    $("#photo img").css("filter", "brightness("+ brightVal +") contrast("+ contrastVal +") saturate(" + satVal + ")");

});

var uploadBtn = document.getElementById("photo-load")

function readURL(input) {

        if (input.files && input.files[0]) {
            var reader = new FileReader();
            reader.onload = function (e) {
                document.getElementById("image-load").src = e.target.result;
            }
            reader.readAsDataURL(input.files[0]);
        }
    }

uploadBtn.addEventListener('change',  function() {
    readURL(this);
});
