var inp=document.querySelectorAll(".number");
var btn=document.querySelector(".btn");
var msg=document.querySelector(".msg");
btn.addEventListener("click",()=>{
  if(Number(inp[0].value)>0&&Number(inp[1].value)>0)
  { var a=0.5*inp[0].value*inp[1].value;
    msg.innerText=`Area Of Triangle is:  ${a} square cm`;}
    else{
      MessageChannel.innerText="INVALID INPUT";
    }
  

})