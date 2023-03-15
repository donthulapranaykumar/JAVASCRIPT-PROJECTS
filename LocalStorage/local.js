document.getElementById("btnInsert").addEventListener("click",()=>{
    var x=document.getElementById("inpKey").value;
    var y=document.getElementById("inpValue").value;
    localStorage.setItem(x,y);
    document.getElementById("IsOutput1").innerHTML=`${x}:${localStorage.getItem(x)}`;
});