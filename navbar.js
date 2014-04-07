var span = $("<div>");

//MAKE LOGO
var logo = $("<div>").addClass('logo');
$("<img>").attr("src", "pics/mainLogo3.png").appendTo(logo);
$("<p>").text('NU Sailbot').appendTo(logo);


//MAKE LINKS
var bar = $("<ul>").addClass('bar');
$("<li>").text("Home").click(function() {
    $("#content").load("html/home.html");
}).appendTo(bar);
$("<li>").text("The Competition").click(function() {
    $("#content").load("html/the-competition.html");
}).appendTo(bar);
$("<li>").text("Our Sailbot").click(function() {
    $("#content").load("html/our-sailbot.html");
}).appendTo(bar);
$("<li>").text("About Us").click(function() {
    $("#content").load("html/about-us.html");
}).appendTo(bar);
$("<li>").text("Gallery").click(function() {
    $("#content").load("html/gallery.html");
}).appendTo(bar);
$("<li>").text("Contact").click(function() {
    $("#content").load("html/contact.html");
}).appendTo(bar);

logo.appendTo(span);
bar.appendTo(span);
$("#navbar").append(span);

