var bulb= document.querySelector(".bulb")
var btn= document.querySelector("button")

 var ded=0

btn.addEventListener("click",function (){
    if(ded==0){
        bulb.style.boxShadow="0 0 60px 30px #fff, 0 0 100px 60px #b400ff, 0 0 140px 90px #ff00d4"
        btn.innerHTML="off"
        ded=1
    }
    else{
        bulb.style.boxShadow="6px 12px 6px black"
        btn.innerHTML="on"
        ded=0
    }
   

})
