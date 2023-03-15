function submit(){
    var email =document.getElementById('email').value
    username = email.split('@');
    document.getElementById("id1").innerHTML="Hello,"+username[0];
}



function showHide(){
    var a=document.getElementById("pwd");
    if(a.type==="password"){
        a.type="text";
        document.getElementById("eyeopen").src="eyeopen.png";
    }
    else{
        a.type="password";
        document.getElementById("eyeopen").src="eyeclose.png";
    }
   }
