var inp=document.querySelectorAll(".number");
var btn=document.querySelector(".btn");
var msg=document.querySelector(".msg");
btn.addEventListener("click",()=>{
  if(Number(inp[0].value)>0&&Number(inp[1].value)>0)
  {var a=Math.sqrt(Math.pow(Number(inp[0].value),2)+Math.pow(Number(inp[1].value),2));
    msg.innerText=`Length of hypotenuse is:  ${a}cm`;}
    else{
      msg.innerText="INVALID INPUT";
    }
  
})