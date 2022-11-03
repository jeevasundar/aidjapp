music1 = "";
music2 = "";

song1_status = "";
song2_status = "";

scoreWrist_r = 0;
scoreWrist_l = 0;

r_wristX = 0;
r_wristY = 0;


l_wristX = 0;
l_wristY = 0;
function preload() {
    music1 = loadSound("music.mp3");
    music2 = loadSound("music2.mp3");
}

function setup() {
    canvas = createCanvas(600, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);

}


function modelLoaded() {
    console.log("inisialized");
}


function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
        scoreWrist_r = results[0].pose.keypoints[10].score;
        scoreWrist_l = results[0].pose.keypoints[9].score;


        r_wristX = results[0].pose.rightWrist.x;
        r_wristY = results[0].pose.rightWrist.y;


        l_wristX = results[0].pose.leftWrist.x;
        l_wristY = results[0].pose.leftWrist.y;
    }
}


function draw() {
    image(video, 0, 0, 600, 500);
    songl_status = songl.isPlaying();
    song2_status = song2.isPlaying();

    Fill("blue");
    stroke("red");

    if (scoreWrist_r > 0.2) {
        circle(r_WristX, r_WristY, 20);
        song2.stop();



        if (song1_status == false) {
            song1.play();
            document.getElementById("song").innerHTML = "Playing - Harry Potter Theme Song"
        }
    }


    if (scoreWrist_l > 0.2) {
        circle(l_WristX, l_WristY, 20);
        song1.stop();

        if (song2_status == false) {
            song2.play();
            document.getElementById("song").innerHTML = "Playing - Peter Pan Song"
        }
    }
}

function play() {
    song.play();
    song.setVolume(1);
    song.rate(1);
};