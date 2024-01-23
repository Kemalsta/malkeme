function changeConversionType() {
    let conversionType = document.getElementById("conversionType").value;
    let label = (conversionType === "inchToCm") ? "Enter value in inches:" : "Enter value in centimeters:";
    document.querySelector("label[for='value']").innerText = label;
}

function calculate() {
    let conversionType = document.getElementById("conversionType").value;
    let value = parseFloat(document.getElementById("value").value);
    let result = (conversionType === "inchToCm") ? value * 2.54 : value / 2.54;
    document.getElementById("result").innerText = `Result: ${result.toFixed(2)} ${conversionType === "inchToCm" ? 'cm' : 'inch'}`;
}
