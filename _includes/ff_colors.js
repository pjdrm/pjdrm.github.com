var textID = $(".navbar-brand")[0]; // go and take the Text from the ID
var text = textID.innerHTML; // Take the text from the
var toChange = text.split(""); // Separrate each letter into array
var newText = ""; // buffer text
var aClassName = ["#ff0000", "#ff6600", "#ffd000", "#99cc00", "#33cccc", "#33cccc", "#cc66ff", "#ff0000", "#ff6600", "#ffd000", "#99cc00", "#ff6600"]; // class name that you want
var colorNumber = 0; // counter to loop into your class

for (var i=0, ii=toChange.length; i<ii; i++){
    // Add between each letter the span with your class
    newText += "<a style=color:"+aClassName[colorNumber]+">"+toChange[i]+"<\/a>";
    colorNumber++
}
// Output your text into the web
textID.innerHTML = newText;
