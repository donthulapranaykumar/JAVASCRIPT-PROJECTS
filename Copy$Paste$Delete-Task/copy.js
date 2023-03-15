let p=[];
document.getElementById("b1").addEventListener("click",()=>{
      p.push(document.getElementById("text1").value);
      document.getElementById("text1").value="";
})
document.getElementById("b2").addEventListener("click",()=>{
      document.getElementById("text2").innerHTML=p;
})
document.getElementById("b3").addEventListener("click",()=>{
      document.getElementById("text2").value="";
})