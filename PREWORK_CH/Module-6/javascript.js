document.getElementById("box").style.maxHeight="1080px";
document.getElementById("box").style.maxWidth="1080px";
document.getElementById("box").style.minHeight="10px";
document.getElementById("box").style.minWidth="10px";
var click=0;
var degree=0;
var height=150;
var width=150;

document.getElementById("button1").addEventListener("click",function(){

    height=height+50;
    width=width+50;
    document.getElementById("box").style.width=width.toString()+"px";
    document.getElementById("box").style.height=height.toString()+"px";
})

document.getElementById("button7").addEventListener("click",function(){
    width=width-50;
    height=height-50;
    document.getElementById("box").style.width=width.toString()+"px";
    document.getElementById("box").style.height=height.toString()+"px";
})

document.getElementById("button3").addEventListener("click",function(){
    document.getElementById("box").style.opacity="0.5";
})

document.getElementById("button2").addEventListener("click",function(){
    document.getElementById("box").style.backgroundColor="blue";
})

document.getElementById("button4").addEventListener("click",function(){
    document.getElementById("box").style.height="150px";
    document.getElementById("box").style.width="150px";
    document.getElementById("box").style.opacity="1.0";
    document.getElementById("box").style.backgroundColor="orange";
    
    while(click!=0){
        click=click-1;
        document.getElementById("box").style.transform="rotate(0deg)";
        
    }
})
document.getElementById("button5").addEventListener("click", function(){
    var h= document.getElementById("box").style.maxHeight;
    var w= document.getElementById("box").style.maxWidth;
    document.getElementById("box").style.height=h;
    document.getElementById("box").style.width=w;
})

document.getElementById("button6").addEventListener("click",function(){
    degree=degree+10;
    document.getElementById("box").style.transform="rotate("+degree.toString()+"deg)";
    click=click+1;
    if(click==35){
        click=0;
    }    

})
