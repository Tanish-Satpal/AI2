song = "";
song2="";
song3="";
function preload(){
    song= loadSound("music.mp3");
    song2=loadSound("music2.mp3");
    song3=loadSound("music3.mp3");
}

function setup(){
    canvas= createCanvas(600, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(video,0,0,600,500);
}   

function play1(){
    song.play();                    
}

function play2(){
    song2.play();                    
}

function play3(){
    song3.play();                    
}

function pause(){
    song.pause();  
    song2.pause();  
    son3.pause();                
}

function stop(){
    song.stop();  
    song2.stop(); 
    song3.stop();                 
}