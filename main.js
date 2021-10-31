function preload(){

}

function setup(){
    canvas=createCanvas(640,480);
    canvas.position(110,150);
    video=createCapture(VIDEO);
    video.hide();
}

function draw(){
 image(video,130,100,350,275);
 

 fill(0, 128, 0);
 stroke(0, 128, 0);
 rect(50, 50, 20, 340);
 rect(525, 50, 20, 340);

 fill(0, 128, 0);
 stroke(0, 128, 0);
 rect(90, 40, 460, 20);
 rect(90, 420, 460, 20);

 fill(255, 0, 0);
 stroke(255, 0, 0);
 circle(50, 50, 80);

 //bottom left circle
 fill(255, 0, 0);
 stroke(255, 0, 0);
 circle(50, 425, 80);

 //bottom right circle
 fill(255, 0, 0);
 stroke(255, 0, 0);
 circle(525, 425, 80);

 //top right circle
 fill(255, 0, 0);
 stroke(255, 0, 0);
 circle(525, 50, 80);

 

}

function take_snapshot(){
    save('ananya_name.png');
}