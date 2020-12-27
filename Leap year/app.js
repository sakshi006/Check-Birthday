const button = document.querySelector(".btn");
const input = document.querySelector(".input");
const output = document.querySelector(".output");
const twitter= document.querySelector(".fa");
const button2 = document.querySelector(".btn2");
const outputDate = document.querySelector(".outputDate");
const userName = document.querySelector("#name");
const userMessage = document.querySelector("#welcome");

//GREETING

userName.addEventListener("input",function(e){
    var message = `Welcome ${e.target.value} !
    Let's see some facts about your birthday!`;
    userMessage.innerHTML= message;
})

//PROGRAM 1

var answerLeap;
button.addEventListener("click",function(){

   // console.log(userName.value);
   if(userName.value==="")
   {
     output.innerHTML = "Please Enter your Name";
     return;
   }
   
   var userDate = input.value;
   userDate = userDate.split("-");
   
   if(userDate.length!==3)
   {
     output.innerHTML = "Please Enter a Valid Date";
      return;
   }
  var userDateYear = parseInt(userDate[0]);
  const ifLeap ="Yay! You were born in a leap year :D"
  const ifNotLeap ="Nevermind! You were not born in a leap year :3"
 
    if(userDateYear %4 ===0)
    {
        if(userDateYear %100 ===0)
           {
            if(userDateYear %400 ===0)
                 answerLeap = ifLeap;
            else
             answerLeap = ifNotLeap;
           }
        else
             answerLeap = ifLeap;
    }
    else
         answerLeap = ifNotLeap;


  output.innerHTML = answerLeap;
})

// PROGRAM 2

var answerPrime
button2.addEventListener("click",function(){
  if(userName.value==="")
   {
     outputDate.innerHTML = "Please Enter your Name";
     return;
   }
 
  var userDate = input.value;
  userDate = userDate.split("-");
  var userDateDay = parseInt(userDate[2]);
  
  if(userDate.length!==3)
   {
     outputDate.innerHTML = "Please Enter a Valid Date";
      return;
   }   

  var f=0; 
  if(userDateDay===1)
  {
    answerPrime= "Your BirthDATE is neither Prime nor Composite";
    outputDate.innerHTML=answerPrime;
      return;
  }
  for(var i=2;i<userDateDay;i++)
   {
      if(userDateDay%i === 0)
       {
           f=1;
           break;
       }
   }

  if(f===1)
    answerPrime = "Your BirthDATE is not a Prime number";
  else
    answerPrime = "Your BirthDATE is a Prime number";

  outputDate.innerHTML=answerPrime;
})

//SHARING AND RESET

twitter.addEventListener("click",function(){
  console.log("hi");
  let outcome = outputDate.textContent;
  console.log("outcome");
  // window.open(`https://twitter.com/intent/tweet?text=${outcome}` ); return false;
})