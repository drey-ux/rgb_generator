const btn = document.getElementById('btn');
const randNumber = ()=>{
    const coloredText = document.getElementById('coloredText');
    const circle = document.getElementById('circle');
    const getNumber = document.getElementById('getNumber').value;

    console.log(getNumber);
    

    if (getNumber === ''){
        alert ('Please enter a value');
       } else if (getNumber < 0) {
         alert ('Please enter a value greater than 0');
       } else if (getNumber > 255) {
        alert ('Please enter a value between 0 and 255');
       }else {
        var number_one = Math.floor(Math.random() * getNumber);
        var number_two = Math.floor(Math.random() * getNumber);
        var number_three = Math.floor(Math.random() * getNumber);
        circle.style = `background: rgb(${number_one}, ${number_two}, ${number_three});
                transition: all 2s forwards 0.5s ease-in-out;`;
        coloredText.textContent = `rgb(${number_one}, ${number_two}, ${number_three})`;
       }
}
btn.addEventListener('click', randNumber)