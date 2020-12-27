const button = document.querySelector(".btn");
const input = document.querySelector(".input");
const output = document.querySelector(".output");
const twitter= document.querySelector(".twitter");
const button2 = document.querySelector(".btn2");
const outputDate = document.querySelector(".outputDate");
const userName = document.querySelector("#name");
const userMessage = document.querySelector("#welcome");
const reset = document.querySelector(".new")
//GREETING

userName.addEventListener("input",function(e){
    var message = `Welcome ${e.target.value} !
    Let's see some facts about your birthday!`;
    userMessage.innerHTML= message;
})

//PROGRAM 1

button.addEventListener("click",function(){
   if(userName.value==="")
   {
     output.innerHTML = "Please Enter your Name";
     return;
   }
   
   var userDate = input.value;
   console.log(userDate);
   userDate = userDate.split("-");   
   if(userDate.length!==3)
   {
     output.innerHTML = "Please Enter a Valid Date";
      return;
   }
  var userDateYear = parseInt(userDate[0]);
  var answerLeap;
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
  var answerPrime,f=0; 
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
  var outcome = output.textContent + outputDate.textContent;
  if(outcome==="")
   output.innerHTML="You gotta play the Game first! :P"
  else{
    window.open(`https://twitter.com/intent/tweet?text=${outcome}` ); return false;
  }  
})

reset.addEventListener("click",function(){
  input.value="";
  outputDate.innerHTML="";
  output.innerHTML="";
})