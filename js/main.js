// problem 1
document.getElementById('getArea').onclick = function () {
    let base = +(document.getElementById('base').value); 
    let height = +(document.getElementById('height').value); 

    if (base >= 0 && height >= 0) {
        let area = 0.5 * base * height;
        document.getElementById('area').innerHTML = `Triangle area is: (${area})`;
        console.log(area);
    } 
    else if (base >= 0 || height >= 0){
        document.getElementById('area').innerHTML = 'Please enter both height and base! positive numbers.';
    }
    else {
        document.getElementById('area').innerHTML = 'Invalid input! Please enter positive numbers.';
    }
};