ّ// problem 3

document.getElementById('convertSecond').onclick = function convertToSecond() {
   
    let minutes = +document.getElementById('minutes').value;
    if (minutes<=0) {
        document.getElementById('seconds').innerHTML = 'Please enter a valid number! positive number';
        
    }
    else{
        let seconds = minutes * 60;
        document.getElementById('seconds').innerHTML = 'The entered number of minutes is equal to ' + seconds + ' seconds.';
        console.log(seconds);
    }
};