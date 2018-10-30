// CSS选择器--document.querySelector()
// var img4=document.querySelector('#images>a:nth-child(4)');
//ID--d
// var img4=document.getElementById('images').children[4];
// var img4=document.getElementsByClassName('hiddenImg')[3];
// var img4=document.getElementsByName('a')[4];
// console.log(img4);

// img4.style.display="block";
// img0.style.display="none";

//获取一组带图像的超链接
var imagesA=document.getElementById("images").children;
// console.log(imagesA);

//行内样式实现换显示样式
// //26行元素隐藏
// imagesA[0].style.display="none";
// //30行元素显示
// imagesA[4].style.display="block";


//通过更换CSS类名来实现更换样式

// //26行元素隐藏
// imagesA[0].className="hiddenImg";
// //30行元素隐藏
// imagesA[4].className="displayImg";
//利用计时器间隔1s，显示1张图像，其余图像隐藏。
var currentNo=0;
function changeImg(){
    //排他原理 ,先去掉同类
    for(var i=0;i<imagesA.length;i++){
        imagesA[i].className="hiddenImg";
        console.log(imagesA[i]);
    }
    // //或者
    //for(const item of imagesA){
    //     item.className="hiddenImg";
    // }

    //再突出自己
    imagesA[currentNo].className="displayImg";

    //换个元素，为下一次计时器调用做准备
    if(currentNo<7) {currentNo++;}
    else{
        currentNo=0;
    }
    // console.log(currentNo);
}
var timer=window.setInterval(changeImg,1000)

function stopChange(){
    window.clearInterval(timer);
}
function startChange(){
    timer=window.setInterval(changeImg,1000);
}

var imagesDiv=document.getElementById("images");
console.log(imagesDiv);
imagesDiv.addEventListener('mouseover',stopChange);
imagesDiv.addEventListener('mouseout',startChange);
