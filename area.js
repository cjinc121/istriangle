var inp=document.querySelectorAll(".number");
var btn=document.querySelector(".btn");
var msg=document.querySelector(".msg");
btn.addEventListener("click",()=>{
  var a=0.5*inp[0].value*inp[1].value;
  msg.innerText=`Length of hypotenuse is:  ${a}cm`;
})