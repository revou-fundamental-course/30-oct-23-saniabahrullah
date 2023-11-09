function calculateBMI() {
    var height = parseFloat(document.getElementById("height").value) / 100; // Convert to meters
    var weight = parseFloat(document.getElementById("weight").value);

    if (!isNaN(height) && !isNaN(weight)) {
        var bmi = weight / (height * height);
        var interpretation = "";

        if (bmi < 18.5) {
            interpretation = "Underweight";
        } else if (bmi < 24.9) {
            interpretation = "Normal weight";
        } else if (bmi < 29.9) {
            interpretation = "Overweight";
        } else {
            interpretation = "Obesity";
        }

        document.getElementById("bmi").textContent = "BMI: " + bmi.toFixed(2);
        document.getElementById("interpretation").textContent = "Interpretation: " + interpretation;
    } else {
        alert("Please enter valid height and weight.");
    }
}
