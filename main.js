function preload(){
}
function setup(){
canvas=createCanvas(500,300);
canvas.position(365,200);
video= createCapture(VIDEO);
video.size(365,200);
video.hide();

poseNet=ml5.poseNet(video, modelLoaded);
posenet.on('pose', gotPoses);
}
function draw(){
image(video,0,0,365,200);
}
function take_snapshot(){
save('Your_Pic.png');
}

function modelLoaded(){
console.log('PoseNet is Initialized');
}

function gotPoses(results){
if(results.length > 0){
console.log(results);
console.log("nose x=" + results[0].pose.nose.x);
console.log("nose y=" + results[0].pose.nose.y);
}}