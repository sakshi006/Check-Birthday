const button = document.querySelector(".btn");
const input = document.querySelector(".input");
const output = document.querySelector(".output");
const fb= document.querySelector(".fa");
const button2 = document.querySelector(".btn2");
const inputDate = document.querySelector(".inputDate");
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


button.addEventListener("click",function(){

    

  var answerLeap;
    if(input.value %4 ===0)
    {
        if(input.value %100 ===0)
           {
            if(input.value %400 ===0)
                 answerLeap = "Leap year";
            else
             answerLeap = "Not Leap year";
           }
        else
             answerLeap = "Leap year";
    }
    else
         answerLeap = "Not Leap year";
    output.innerHTML = answerLeap;

})

// PROGRAM 2


button2.addEventListener("click",function(){

    console.log(typeof(inputDate.value));
    console.log(typeof(parseInt(inputDate.value)));
        
   var answerPrime;
  if(inputDate.value>31 ||inputDate.value<1)
  {
      answerPrime = "Enter Valid Date";
      outputDate.innerHTML=answerPrime;
      return;
  }
  if(inputDate.value===1)
  {
    answerPrime= "neither prime nor composite";
    outputDate.innerHTML=answerPrime;
      return;
  }

  var f=0;
  for(var i=2;i<inputDate.value;i++)
   {
      if(inputDate.value%i === 0)
       {
           f=1;
           break;
       }
    }

    if(f===1)
      answerPrime = "not prime";
    else
      answerPrime = "prime";

    outputDate.innerHTML=answerPrime;
})

