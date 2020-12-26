var button = document.querySelector(".btn");
var input = document.querySelector(".input");

var output = document.querySelector(".output");

button.addEventListener("click",function(){    
     //console.log(typeof(input.value));
  

    if(input.value %4 ===0)
    {
        output.innerHTML = "Leap year";
    }
    else
    {
        output.innerHTML = "Not Leap year";
    }
    
})