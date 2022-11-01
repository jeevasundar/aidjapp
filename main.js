music1="";
music2="";

song1_status="";
song2_status="";

scoreWrist_r=0;
scoreWrist_l=0;

r_wristX=0;
r_wristY=0;


l_wristX=0;
l_wristY=0;
function preload() {
    music1=loadSound("music.mp3");
    music2=loadSound("music2.mp3");
}

function setup(){
    canvas=createCanvas(600,500)
    canvas.center()

    video=createCapture(VIDEO);
    video.hide();

    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotposes);

}


function modelLoaded(){
    console.log("inisialized");
}