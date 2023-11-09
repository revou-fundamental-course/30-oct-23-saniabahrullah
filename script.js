function calculateBMI() {
    // Mengambil nilai input dari form
    var age = document.getElementById("age").value;
    var gender = document.getElementById("gender").value;
    var height = document.getElementById("height").value;
    var weight = document.getElementById("weight").value;

    // Melakukan perhitungan BMI
    var heightMeters = height / 100; // Mengkonversi tinggi dari cm ke meter
    var bmi = weight / (heightMeters * heightMeters);

    // Menampilkan hasil BMI
    var bmiResult = document.getElementById("bmi");
    bmiResult.innerHTML = "BMI: " + bmi.toFixed(2);

    // Menyediakan interpretasi BMI berdasarkan kategori
    var interpretation = document.getElementById("interpretation");
    if (bmi < 18.5) {
        interpretation.innerHTML = "Underweight";
    } else if (bmi >= 18.5 && bmi < 24.9) {
        interpretation.innerHTML = "Normal weight";
    } else if (bmi >= 25 && bmi < 29.9) {
        interpretation.innerHTML = "Overweight";
    } else {
        interpretation.innerHTML = "Obesity";
    }

    // Menambahkan informasi usia dan jenis kelamin ke hasil BMI
    bmiResult.innerHTML += "<br>Age: " + age + " years";
    bmiResult.innerHTML += "<br>Gender: " + gender;
}