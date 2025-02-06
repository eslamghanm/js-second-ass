// problem 2


document.getElementById('nextNumber').onclick = function nextNumber() {
    let prenum = document.getElementById('number').value;
  
    if (prenum === '') {
        document.getElementById('result').innerHTML = 'Please enter a valid number.';
        
    }
    else {
        let nextnum = +prenum + 1;
        document.getElementById('result').innerHTML = 'The next number after '+ prenum +' is: '+ nextnum;
        console.log(nextnum);
        
    }


   
}

    
