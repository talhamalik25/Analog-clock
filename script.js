let hours = document.getElementById("hour");
let mins = document.getElementById("min");
let secs = document.getElementById("sec");

function displayTime (){
     let date = new Date();


     let hr = date.getHours();
     let mn = date.getMinutes();
     let sc = date.getSeconds();

     let hRotation = 30*hr + mn/2;
     let mRotation = 6*mn;
     let sRotation = 6*sc;

     hours.style.transform = `rotate(${hRotation}deg)`;
     mins.style.transform = `rotate(${mRotation}deg)`;
     secs.style.transform = `rotate(${sRotation}deg)`;

}

setInterval(displayTime, 1000);
