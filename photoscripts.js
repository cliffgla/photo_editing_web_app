var brightVal;

var contrastVal;

var satVal;

$("#choose-button").on("click", function() {
    $("#image-loader").click();
});

$("input[value]").change(function() {
    //brightness control
    brightVal = $("#brightness-input").val();
    pVal = parseInt(brightVal);
    console.log(brightVal);

    brightVal = (pVal+10)/10.0;

    $("#brightness-value").html("<p>"+ pVal + "</p>");
    $("img").css("filter", "brightness("+ brightVal +") contrast("+ contrastVal +") saturate(" + satVal + ")");

    //contrast control
    contrastVal = $("#contrast-input").val();
    pVal = parseInt(contrastVal);
    console.log(contrastVal);

    contrastVal = (pVal+10)/10.0;

    $("#contrast-value").html("<p>"+ pVal + "</p>");
    $("img").css("filter", "brightness("+ brightVal +") contrast("+ contrastVal +") saturate(" + satVal + ")");

    //saturation control
    satVal = $("#saturation-input").val();
    pVal = parseInt(satVal);
    console.log(contrastVal);

    satVal = (pVal+10)/10.0;

    $("#saturation-value").html("<p>"+ pVal + "</p>");
    $("img").css("filter", "brightness("+ brightVal +") contrast("+ contrastVal +") saturate(" + satVal + ")");

});

$(".slider-control").on("mousedown",function(){
    $(this).addClass("selected");
    $(this).mouseup(function(){
        $(this).removeClass("selected");
    });

});

$("#brightness-input").dblclick(function(){
    $("#brightness-input").val(0);
    brightVal = 1;
    $("img").css("filter", "brightness("+ brightVal +") contrast("+ contrastVal +") saturate(" + satVal + ")");
    $("#brightness-value").html("<p>"+ 0 + "</p>");
});

$("#contrast-input").dblclick(function(){
    $("#contrast-input").val(0);
    contrastVal = 1;
    $("img").css("filter", "brightness("+ brightVal +") contrast("+ contrastVal +") saturate(" + satVal + ")");
    $("#contrast-value").html("<p>"+ 0 + "</p>");
});

$("#saturation-input").dblclick(function(){
    $("#saturation-input").val(0);
    satVal = 1;
    $("img").css("filter", "brightness("+ brightVal +") contrast("+ contrastVal +") saturate(" + satVal + ")");
    $("#saturation-value").html("<p>"+ 0 + "</p>");
});







var uploadBtn = document.getElementById("image-loader")

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

/* Mobile Event Handlers */
