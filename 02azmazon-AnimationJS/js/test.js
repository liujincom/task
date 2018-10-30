var timer;

// function startTimer(speed){
//     timer=window.setInterval(changeNum,speed);
// }
// startTimer(100);
timer=window.setInterval(changeNum,1000);
var images1 = document.querySelector('#images');
var images2 = document.querySelector('images');

console.log(images1);
console.log(images2);
console.log(images2.children[3]);
var currentNo = 1;
function changeNum() {
    if (currentNo < 8) currentNo++;
    else currentNo = 1;
    h2Obj.innerHTML='<img src="images/0'+currentNo+'.jpg" alt=""></img>';
    // console.log(currentNo);
}
// console.log(timer);
var btnObj = document.getElementById('btnObj');
// console.log(btnObj);
// btnObj.addEventListener('click', stopChangNum);
// function changeNum() {
//     if (flag) {
//         window.clearInterval(timer);
//         btnObj.textContent = "启动"
//         flag = false;
//     }
//     else {
//         timer = window.setInterval(changeNum, 1000);
//         btnObj.textContent = "停止"
//         flag = true;
//     }
// }


function startChange(){
    startTimer(500);
    btnObj.textContent="停止"
}
function stopChange(){
    timer=window.setInterval(changeNum,100);
    btnObj.textContent="启动"
}
btnObj.addEventListener('mouseover',stopChange);
btnObj.addEventListener('mouseout',startChange);