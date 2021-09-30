nosex = 0;
nosey = 0;

function preload()
{
    clown_nose = loadImage('https://i.postimg.cc/JhKkGnP5/clown-nose.png');
}

function setup()
{
    canvas = createCanvas(300 , 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300 , 300);
    video.hide();
    poseNet = ml5.poseNet(video , modelLoaded);
    poseNet.on('pose' , gotPoses);
}


function modelLoaded()
{
    console.log("Model Loaded !!");
}

function gotPoses(results)
{
  if(results.length > 0)
  {
      console.log(results);
      console.log(nosex);
      console.log(nosey);
      nosex = results[0].pose.nose.x-10;
      nosey = results[0].pose.nose.y-10;

  }
}

function draw()
{
 image(video , 0 , 0 , 300 , 300);

 image(clown_nose , nosex , nosey , 30 , 30);
 
}

function take_snapshot()
{
    save('My_Image.png');
}