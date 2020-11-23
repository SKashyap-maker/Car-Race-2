canvas = document.getElementById("myCanvas"); 
ctx = canvas.getContext("2d");
car_Width = 100;
car_Height = 90;
Car_1 = "Car.png";
Car_2 = "Car2.png";
background_Image = "mars.jpg";

function add(){
    background_imgTag = new Image();
    background_imgTag.onload = uploadBackgroundImage;
    background_imgTag.src = background_Image;

    car_imgTag = new Image();
    car_imgTag.onload = uploadRoverImage;
    car_imgTag.src = car_Image;
}
function uploadBackgroundImage() {
    ctx.drawImage(background_imgTag,0,0,canvas.width, canvas.height);
}
function uploadCar1Image(){
    ctx.drawImage(car_imgTag,0,0, car_Width,car_Height);
}
function uploadCar2Image(){
    ctx.drawImage(car_imgTag,50,50, car_Width,car_Height);
}

window.addEventListener( "keydown", myKeydown );
function myKeydown(){
    keypress = e.keyCode;
    console.log(keypress);  

    if ( keypress === "38" ) {
        up();
        console.log("up");
    }
    if ( keypress === "40" ) {
        down();
        console.log("down");
    }
    if ( keypress === "37" ) {
        left();
        console.log("left");
    }
    if ( keypress === "37" ) {
        right();
        console.log("right");
    }
}