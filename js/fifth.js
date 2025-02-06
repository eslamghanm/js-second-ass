// problem 5
document.getElementById('basketballPoint').onclick=function() {
    let two=document.getElementById('pointer-2').value;
    let three=document.getElementById('pointer-3').value;
    if (two < 0 && three <0) {
        document.getElementById('result').innerHTML='Invalid input! Please enter positive numbers.';


    }
    

  
  
else if (two < 0 || three < 0){
    document.getElementById('result').innerHTML="Please enter both inputs! positive numbers.";

}

else {
    let points = 2*two + 3*three;
    document.getElementById('result').innerHTML='The total points scored in the basketball game is: '+ points;
    console.log(points);
 
}
   
 
}
