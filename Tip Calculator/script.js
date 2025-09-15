let calc = document.getElementById("calc");

calc.onclick = () => {
    let amount = parseFloat(document.getElementById("amount").value);
    let tip = parseFloat(document.getElementById("tip").value);

    let total = amount+ (amount * tip/100);
    document.getElementById("total").innerText = 'Total rs ' + total.toFixed(2);
}