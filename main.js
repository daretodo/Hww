noseX = 0;
noseY = 0;
leftWristX = 0;
rightWristX = 0;
difference = 0 ;


function setup(){
    video = createCapture(VIDEO);
    video.size(550,550)
    canvas = createCanvas(550,550);
    canvas.position(560,150);
        
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses)
    
}
function draw(){
    background('#FF0000')
    fill('#ffc3a0')
    stroke('#c8145d')
    textSize(difference);
    text("Banana",50,300);

}
function modelLoaded(){
    console.log('Posetnet Is Working')
}
function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("Nose X = "+noseX+" Nose Y ="+noseY);
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX-rightWristX)
        console.log("Left wrist = "+leftWristX+"Right wrist = "+rightWristX+"Difference"+difference);  
    }
}