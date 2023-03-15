const companies = ["Cognizent", "Wipro", "Amazon", "TCS", "NIT", "CTS"];
document.getElementById("D0").innerHTML = companies.toString() + "<br>" +
 companies.pop() + "<br>" +
 companies.push("Jio") + "<br>" +
  companies + "<br>" +
   companies.shift() + "<br>"
 + companies + "<br>" +
  companies.unshift() + "<br>"
   + companies + "<br>" + 
   companies.unshift("Accenture")
 + "<br>" + companies + "<br>" +
  delete companies[3] +"<br>" + 
  companies + "<br>" +
   companies.splice(3,0,  "HCL", "Microsoft") + "<br>" + companies;

const girlsName = ["pandu", "dolly"];
const boysName = ["nani", "naresh", "vinay"];
const children = boysName.concat(girlsName);

document.getElementById("D1").innerHTML = children;






const array1 = ["cinderella", "barbegirl"];
const array2 = ["NTR", "maheshbabu", "alluarjun"];
const array3 = ["anil", "suresh"];

const myChildren1 = array1.concat(array2, array3); 

document.getElementById("D2").innerHTML = myChildren1;



const fruits = ["custerdapple", "pineapple", "popaya", "Mango"];
document.getElementById("D3").innerHTML = "Original Array:<br> " + fruits;



let removed = fruits.splice(2, 2, "Lemon", "Kiwi"); 
document.getElementById("D4").innerHTML = "New Array:<br>" + fruits;
document.getElementById("D5").innerHTML = "Removed Items:<br> " + removed;



const fruits1 = ["apple", "pineapple", "LimeLemon", "mango"];
const citrus = fruits.slice(1,3);
document.getElementById("D6").innerHTML = fruits1 + "<br><br>" + citrus;
