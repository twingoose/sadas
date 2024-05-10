function setup()
{
video =  createCapture(VIDEO);
video.size(550,500);


canvas = createCanvas(550,500);
canvas.position(550,300);

poseNet = ml5.poseNet(video,modelLoaded);
poseNet.on('pose',gotPoses);
}

function draw()
{

    background('#00ffff');
    fill("#FF0000");
    stroke("#FF0000");

    f(scoreLeftWrist > 0.2) 
        {
        
            circle(leftWristX,leftWristY,20);
            InNumberLeftWristY = Number(leftWristY);
            remove_decimals = floor(InNumberLeftWristY);
            leftWristY_divide_1000 = remove_decimals/1000;
            volume = leftWristY_divide_1000 *2;    
            volume = remove_decimals/500;
         document.getElementById("volume").innerHTML = "Volume = "   + volume;
         song.setVolume(volume);    
        }

}

function modelLoaded ()
{
console.log('poseNet Is Initialize!');
}


function gotPoses ()
{
if(results.length > 0)
{
    console.log(results);
}
}

noseX=0;
noseY=0;
difference = 0;
rightWristX = 0;
leftWristX = 0;

function gotPoses(results)
{
if(results.length > 0)
{
    console.log(results);
    scoreLeftWrist =  results[0].pose.keypoints[9].score;
    console.log("scoreLeftWrist = " + scoreLeftWrist);

    leftWristX = results[0].pose.leftWrist.x;
    leftWristY = results[0].pose.leftWrist.y;
    console.log("leftWristX = " + leftWristX + "leftWristY = " + leftWristY);

    rightWristX = results[0].pose.rightWrist.x;
    rightWristY = results[0].pose.rightWrist.y;
    console.log("rightWristX = " + rightWristX + "rightWristY = " + rightWristY);
}
    }




function play()
{
song.play();
song.setVolume(1);
song.rate(1)
}




    

    



