let name = "Igor";
let number = 0;
console.log(name + "'s apple");
console.log("Hellobello");

$('h1').text('We are having a 10 minute break');
//$('h1').delay(3000).fadeOut();

$("p").html("Stay at home coding camp. Likes: <strong>13</strong>");
$("strong").css("background", "lime");


let color = "blue";

//$("h2").toggleClass("blue");    //hozzáadhatjuk mondjuk egy taghez a már létező css elemet
$("h2").toggleClass(color);    //hozzáadhatjuk mondjuk egy taghez a már létező css elemet ÉS működik így is, hogy stringként megadtam egy változót
$("h2").toggleClass(color);   //mégegyszer meghívva kikapcsolja

$("ul").append("<li>My name is: " + name + "</li>");
$("ul").append('<li id="special-list-item"> My name is: ' + name + '</li>');
$("li").remove('#special-list-item');


let addButtonHandler = () => {

    if ($("li").length < 5) {
        $("ul").append("<li>My name is: " + name + "</li>");
    }
};

$("#add-button").click(addButtonHandler);


$("#remove-button").click(() => {
    $("li:last-child").remove();
});


let age = 17;
if (age < 18) {
    console.log("Not old enough to drink");
} else {
    console.log("Old enough to drink")
}
console.log("This is after the if");


let colors = ["orange", "lime", "green", "red", "purple"];
//$("#box-container").append('<div class="box"></div>');
//$(".box:last-child").css('background', colors[0]);

for (let index = 0; index < colors.length; index++) {
    $("#box-container").append('<div id="boxid' + index + '" class="box"></div>');
    $(".box:last-child").css('background', colors[index]);
}

//colors.forEach((color) => {
//    $("#box-container").append('<div class="box"></div>');
//    $(".box:last-child").css('background', color);
//});

$(".box").hover((eventObj) => {
    $("#" + eventObj.target.id).slideToggle("slow");
});