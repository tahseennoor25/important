const decreaseNumber = () =>{
    var itemval = document.getElementById("textbox");
  }
  console.log(itemval.value);
  if(itemval.value < 0){
   itemval.value = 0;
  }else{
    itemval.value = parseInt(itemval.value) - 1;
  }
  
  const increaseNumber = () =>{
    var itemval = document.getElementById("textbox");
  }
  console.log(itemval.value);
  if(itemval.value > 0){
   itemval.value = 5;
   alert("max 5 allowed");
   itemval.style.background = "red";
   itemval.style.color = "#fff"
  }else{
    itemval.value = parseInt(itemval.value) + 1;
  }