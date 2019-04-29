let element1 = document.querySelector('.element_1');
let element2 = document.querySelector('.element_2');

let element4 = document.querySelector('.element_4');
let element5 = document.querySelector('.element_5');
let element8 = document.querySelector('.element_8');
let element9 = document.querySelector('.element_9');
let element11 = document.querySelector('.element_11');


var degrees1 = -90;
var degrees2 = 0;
var degrees4 = -90;
var degrees5 = 0;
var degrees8 = 0;
var degrees9 = 0;

element1.style.transform = "rotate("+degrees1+"deg)";
element4.style.transform = "rotate("+degrees4+"deg)";

element1.onclick = function () {
    degrees1+=90;
    if (degrees1==0){
        element1.style.transform = "rotate("+degrees1+"deg)";
        element1.onclick = "null";
    }
    else{
        element1.style.transform = "rotate("+degrees1+"deg)";
    }
}
element2.onclick = function () {
    degrees2+=90;
    if (degrees2==90){
        element2.style.transform = "rotate("+degrees2+"deg)";
        element2.onclick = "null";
    }
    else{
        element2.style.transform = "rotate("+degrees2+"deg)";
    }
}

element4.onclick = function () {
    degrees4+=90;
    if (degrees4==0){
        element4.style.transform = "rotate("+degrees4+"deg)";
        element4.onclick = "null";
    }
    else{
        element4.style.transform = "rotate("+degrees4+"deg)";
    }
}

element5.onclick = function () {
    degrees5+=90;
    if (degrees5==90){
        element5.style.transform = "rotate("+degrees5+"deg)";
        element5.onclick = "null";
    }
    else{
        element5.style.transform = "rotate("+degrees5+"deg)";
    }
}


element8.onclick = function () {
    degrees8+=90;
    if (degrees8==270){
        element8.style.transform = "rotate("+degrees8+"deg)";
        element8.onclick = "null";
    }
    else{
        element8.style.transform = "rotate("+degrees8+"deg)";
    }
}

element9.onclick = function () {
    degrees9+=90;
    if (degrees9==180){
        element9.style.transform = "rotate("+degrees9+"deg)";
        element9.onclick = "null";
    }
    else{
        element9.style.transform = "rotate("+degrees9+"deg)";
    }
}


setInterval(function () {
    checkRoot();
},1000)


function checkRoot() {
    // console.log(degrees1);
    // console.log(degrees2);
    // console.log(degrees4);
    // console.log(degrees5);
    // console.log(degrees8);
    // console.log(degrees9);
    if (degrees1==0 && degrees2==90 && degrees4==0 && degrees5==90 && degrees8==270 && degrees9==180){
        console.log("perfect");
        element11.style.left = 300+ "px";
    }
}