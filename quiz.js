var inp=document.querySelector(".form");
var butn=document.querySelector(".btn");
var msg=document.querySelector(".msg");
var ans=["90°","right angled","12,16,20"];
butn.addEventListener("click",(e)=>{
  e.preventDefault();
  var data=new FormData(inp);
  console.log(data.values());
 
  var i=0;
  var s=0;
  for(let entry of data.values())
  {
      if(entry===ans[i])
      s++;
      i++;
  }
  msg.innerText=`Your Score is:  ${s}`;

})