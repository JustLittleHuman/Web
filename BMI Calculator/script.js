const calc = document.getElementById("calc");
const res = document.getElementById("res");
const height = document.getElementById("height");
const weight = document.getElementById("weight");
const click = new Audio("sounds/click.wav");

function calculate()
{
    click.play();
    
    if (height.value.length == 0 || weight.value.length == 0)
    {
        return;
    }

    let h = parseInt(height.value);
    let w = parseInt(weight.value);
    res.innerText = `Your BMI is ${(w / Math.pow(h / 100, 2)).toFixed(2)}`;
}

calc.addEventListener("click", calculate);