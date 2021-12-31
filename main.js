var SpeechRecognition=window.webkitSpeechRecognition;
var speaker=new SpeechRecognition();

function start(){
    document.getElementById("textBox").innerHTML="";
    speaker.start();
}
speaker.onresult=function(event){
    console.log(event);
    var content=event.results[0][0].transcript;
    console.log(content);
    document.getElementById("textBox").innerHTML=content;
    if(content=="take my selfie"){
        console.log("taking selfie_______");
    speak();
    }
}
function speak(){
    var synth=window.speechSynthesis;
    speakData="taking your selfie in 5 seconds";
    var tellthis=new SpeechSynthesisUtterance(speakData);
    synth.speak(tellthis);
    Webcam.attach(camera);
    setTimeout(function(){
        takeSnapshot();
        save();
    },5000);
}
Webcam.set({
    width:360,
    height:250,
    image_format:'png',
    png_quality:99
});
camera=document.getElementById("camera");
function takeSnapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="pic"src="'+data_uri+'">';
    });
}
function save(){
    link=document.getElementById("link");
    image=document.getElementById("pic").src;
    link.href=image;
    link.click();
}