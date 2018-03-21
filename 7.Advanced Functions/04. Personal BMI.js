function calculateBmi(name, age, weight, height) {
    let person = {
        name: name,
        personalInfo: {age: age, height: height, weight: weight}
    };
    if (weight > 0 && height > 0) {
        let finalBmi =Math.round( weight / (height / 100 * height / 100));
        person['BMI']=finalBmi;
        if (finalBmi < 18.5) {
            person['status']="underweight";
        }
        if (finalBmi > 18.5 && finalBmi < 25) {
            person['status']="normal";
        }
        if (finalBmi >= 25 && finalBmi < 30) {
            person['status']="overweight";

        }
        if (finalBmi >= 30) {
            person['status']="obese";
            person['recommendation']="admission required";
        }
    }

    return person;
}
console.log(calculateBmi('Petkan', 20, 80, 178));
