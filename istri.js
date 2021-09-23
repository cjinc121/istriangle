var inp=document.querySelectorAll(".angle");
var button=document.querySelector(".btn");
var msg=document.querySelector(".message");
button.addEventListener("click",()=>{
  if(inp[0].value&&inp[1].value&&inp[2].value)
  {
    if((Number(inp[0].value)+Number(inp[1].value)+Number(inp[2].value))===180)
    {
      msg.innerText="IT IS A TRIANGLE .";
  
    }
    else
    msg.innerText="IT IS NOT A TRIANGLE .";}
    else
    {
      msg.innerText="INVALID INPUT";
      
    }
    
})