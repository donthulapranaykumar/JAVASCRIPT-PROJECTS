function Sum() {
                                                 /* sum of given two numbers*/
  var x = eval(document.getElementById("id1").value);
  var y = eval(document.getElementById("id2").value);
  var sum = x + y;

  document.getElementById("ss").innerHTML = "The Sum Is =" + sum;
}

function Diff() {
                                                 /* Difference of given two numbers*/
  var x = eval(document.getElementById("id1").value);
  var y = eval(document.getElementById("id2").value);
  var Diff = x - y;

  document.getElementById("ss").innerHTML = "The Diff Is =" + Diff;
}



function Mul() {
                                              /* multiplication of given two numbers*/
  var x = eval(document.getElementById("id1").value);
  var y = eval(document.getElementById("id2").value);
  var Mul = x * y;

  document.getElementById("ss").innerHTML = "The Mul Is =" + Mul;
}

function Div() {
                                               /* Division of given two numbers*/
  var x = eval(document.getElementById("id1").value);
  var y = eval(document.getElementById("id2").value);
  var Div = x / y;

  document.getElementById("ss").innerHTML = "The Div Is =" + Div;
}

function Mod() {
                                                  /* mod of given two numbers*/
  var x = eval(document.getElementById("id1").value);
  var y = eval(document.getElementById("id2").value);
  var Mod = x % y;

  document.getElementById("ss").innerHTML = "The Mod Is =" + Mod;
}
function EvenOrOdd() {
                                  /*Checking Even or Odd*/
  var x = eval(document.getElementById("id5").value);
  if (x % 2 == 0) {
    document.getElementById("SS").innerHTML = "The number is Even=" + x;
  } else {
    document.getElementById("SS").innerHTML = "The number is Odd=" + x;
  }
}

function Square() {
  var x = eval(document.getElementById("id5").value);

  var y = x * x;

  document.getElementById("SS").innerHTML = y;
}



function CheckPrime(){
  var a = document.getElementById("id5").value;
  var b =0;
  if (a==0 || a==1){
  b = 1;}
  for (var i =2;
       i<=a/2; i++ ){
      if (a%i==0){
              b =1;
          }
      }
  if (b==0){
      document.getElementById("SS").innerHTML=" is a prime number";
  }
  else{
      document.getElementById("SS").innerHTML=" is not a prime number";
  }
   }
  

    function CheckPalindrome(){
      var a =eval( document.getElementById("id5").value);
    var b = a;
    var reverse = 0;
    var remainder;
    while(a !=0){
        remainder = a %10;
        reverse = reverse*10+remainder;
        a = Math.floor(a/10);
    }
    if( reverse == b){
        document.getElementById("SS").innerHTML= "It is a palindrome";
    }
    else{
        document.getElementById("SS").innerHTML= "It is not a palindrome";
    }

    }

    function Reverse(){
      var a = eval(document.getElementById("id5").value);
    var reverse = 0;
    var remainder;
    while(a !=0){
        remainder = a %10;
        reverse = reverse*10+remainder;
        a = Math.floor(a/10);
    }
    document.getElementById("SS").innerHTML="Reverse number is " + reverse;

    }


    function CheckAmstrong(){
      var a = document.getElementById("id5").value;
   var b = a
    var remainder;
    var temp=0;
    while(a>0){
        rem = a%10;
        temp = temp+(rem*rem*rem);
        a = Math.floor(a/10);
    }
    if (temp==b){
        document.getElementById("SS").innerHTML="It is an Armstrong number";
    }
    else{
        document.getElementById("SS").innerHTML="It is not an Armstrong Number";
    }

    }

