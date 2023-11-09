function calculateBMI() {
    var age = document.getElementById("age").value;
    var gender = document.getElementById("gender").value;
    var height = document.getElementById("height").value;
    var weight = document.getElementById("weight").value;

    var heightMeters = height / 100;
    var bmi = weight / (heightMeters * heightMeters);

    var bmiResult = document.getElementById("bmi");
    bmiResult.innerHTML = "BMI: " + bmi.toFixed(2);

    var interpretation = document.getElementById("interpretation");
    if (bmi < 18.5) {
        interpretation.innerHTML = "Kekurangan Berat Badan";
    } else if (bmi >= 18.5 && bmi < 24.9) {
        interpretation.innerHTML = "Normal";
    } else if (bmi >= 25 && bmi < 29.9) {
        interpretation.innerHTML = "Kelebihan Berat Badan";
    } else {
        interpretation.innerHTML = "Kegemukan";
    }

    bmiResult.innerHTML += "<br>Usia: " + age + " tahun";
    bmiResult.innerHTML += "<br>Jenis Kelamin: " + (gender === "male" ? "Laki-Laki" : "Wanita");
}
