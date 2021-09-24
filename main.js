left_song="";
right_song="";
leftWristX=0;
leftWristY=0;
rightWristX=0;
rightWristY=0;
scoreLeftWrist=0;

function setup(){
canvas=createCanvas(600, 500);
canvas.center();

video=createCapture(VIDEO);
video.hide();

poseNet=ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses);

}

function gotPoses(results){
    results[0].pose.keypoints[9].score;
    if(results.length>0){
        console.log(results);
        scoreLeftWrist=results[0].pose.keypoints[9].score;
        console.log("scoreLeftWrist= "+ scoreLeftWrist);

        leftWristX=results[0].pose.leftWrist.x;
        leftWristY=results[0].pose.leftWrist.y;
        console.log("leftWristX="+ leftWristX+"leftWristY="+leftWristY);

        rightWristX=results[0].pose.rightWrist.x;
        rightWristY=results[0].pose.rightWrist.y;
        console.log("rightWristX="+ rightWristX+"rightWristY="+rightWristY);


    }
}

function modelLoaded(){
    console.log('Pose net is Initialized!');
}

function draw(){
    image(video, 0, 0, 600, 500);
    left_song=URL('gone by rose');
    fill("#FF0000");
    stroke ("#FF0000");

    circle(rightWristX, rightWristY, 20);
    right_song=URL('on the ground by rose');
    fill("#FF0000");
    stroke ("#FF0000");

    if(scoreLeftWrist>0.2){

    circle(leftWristX, leftWristY, 20);
  

  if(left_song=true){
      left_song.play();
      document.getElementById("name_of song").innerHTML="Song Name= "+ left_song;
  
  }
}
}