var button = document.querySelector(".btn");
var input = document.querySelector(".input");
var output = document.querySelector(".output");

button.addEventListener("click",function(){

    if(input.value %4 ===0)
    {
        output.innerHTML = "Leap year";
    }
    else
    {
        output.innerHTML = "Not Leap year";
    }

})



// PROGRAM 2

var button2 = document.querySelector(".btn2");
var inputDate = document.querySelector(".inputDate");
var outputDate = document.querySelector(".outputDate");


button2.addEventListener("click",function(){

  if(inputDate.value>31 ||inputDate.value<1)
  {
      outputDate.innerHTML = "Enter Valid Date";;
      return;
  }

  var f=0;
  if(inputDate.value===1)
  {
    outputDate.innerHTML= "neither prime nor composite";
      return;
  }

  for(var i=2;i<inputDate.value;i++)
   {
      if(inputDate.value%i === 0)
       {
           f=1;
           break;
       }
    }

    if(f===1)
    outputDate.innerHTML = "not prime";
    else
    outputDate.innerHTML = "prime";
})