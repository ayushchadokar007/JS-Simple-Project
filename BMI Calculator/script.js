let weight = parseFloat(document.getElementById("weight").value);
let height = parseFloat(document.getElementById("height").value);
let calc = document.getElementById("btn");

calc.onclick = () =>{
    let bmi = weight / height * height;
    document.getElementById("result").innerText = 'BMI '+ bmi.toFixed(2);

}