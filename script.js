const container = document.querySelector(".container");
const generatebtn= document.querySelector(".btn");

const qrinput=document.querySelector(".qrinput");
const qrimg=document.querySelector(".scan-img");

  generatebtn.onclick = function(){

 if(qrinput.value.length>0){
    generatebtn.innerText="generating Qr code...";
    
    qrimg.src="https://api.qrserver.com/v1/create-qr-code/?size=170x170&data="  
    +qrinput.value ;
    qrimg.onload = function(){
        container.classList.add("active");
        generatebtn.innerText= "generated qr code";
    }
 }

  }
 