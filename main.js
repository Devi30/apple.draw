x = 0;
y = 0;
screenwidth=0;
screenheight=0;
draw_apple = "";
apple="";
speak_data="";
to_number="";
var SpeechRecognition = window.webkitSpeechRecognition;
  
var recognition = new SpeechRecognition();
function preload(){
  loadImage("apple.png")
}

function start()
{
  document.getElementById("status").innerHTML = "System is listening please speak";  
  recognition.start();
} 
 
recognition.onresult = function(event) {
to_number=Number(content)
 console.log(event); 
  if(Number.isInteger(to_number)){
    document.getElementById("status").innerHTML="Started drawing Apple"
    draw_apple="set"
  }
  else{
    document.getElementById("status").innerHTML="the speech has not been recognized"
  }
 content = event.results[0][0].transcript;

    document.getElementById("status").innerHTML = "The speech has been recognized: " + content; 

}

function setup() {
 screenwidth=window.innerWidth;
 screenheight=window.innerHeight;
 createCanvas(screenwidth,screenheight);
}

function draw() {
  if(draw_apple == "set")
  {
    document.getElementById("status").innerHTML = to_number + " Apples drawn";
    draw_apple = "";
    for(var i=1; i<= to_number; i++){
      x=Math.floor(Math.random()*150)
      y=Math.floor(Math.random()*150)
      image(apple,x,y,50,50)
    }
  }
  document.getElementById("status").innerHTML= to_number+"Apples drawn";
  speak_data= to_number+"Apples drawn"
  speak()
}

function speak(){
    var synth = window.speechSynthesis;

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);

    speak_data = "";
}
