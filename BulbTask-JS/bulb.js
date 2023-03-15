function turnOnOff(){
    var image=document.getElementById('image');
    if(image.src.match("ONbulb"))
    image.src="OFFbulb.jpg";
    else
    image.src="ONbulb.jpg";

}