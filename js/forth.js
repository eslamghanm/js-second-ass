// problem 4
document.getElementById("showperimeter").onclick=function(){
    let lenght=+document.getElementById('lenght').value;
    let width=+document.getElementById('width').value;
    if (lenght <=0 && width<=0) {
        document.getElementById('result').innerHTML='Invalid input! Please enter positive numbers.';

    }
    

  
  
else if (lenght<=0|| width<=0){
    document.getElementById('result').innerHTML="Please enter both length and width positive numbers.";

}
    else{
    let perimeter = 2 * (lenght + width);
    document.getElementById('result').innerHTML = 'The perimeter of the rectangle is: '+ perimeter;
    console.log(perimeter);
    }
}