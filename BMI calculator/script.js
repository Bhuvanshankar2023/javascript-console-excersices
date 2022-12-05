let weight = Number((prompt("Enter your weight")));
let Height = Number((prompt("enter your Height")));
let BMI = weight / (Height * Height);
if(BMI < 18.5 ){
    console.log('Underweight');
} else if( BMI >= 25.5){
    console.log("Normal")
} else if(BMI >= 30){
    console.log("overweight")
} else if(BMI > 30){
    console.log("Obese");
} else{
    console.log("error found")
}