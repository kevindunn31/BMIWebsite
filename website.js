const { default: axios } = require("axios");
const { appendFile } = require("fs");

function Calculate() {
    const height = document.getElementById("height-input").value;
    const weight = document.getElementById("weight-input").value;
    const result = parseFloat(weight) / (parseFloat(height)/100)**2;

    if(!isNaN(result)) {
        document.getElementById("bmi-output").innerHTML = result;
        if(result < 18.5){
            document.getElementById("bmi-results").innerHTML = "Underweight";
        }
        else if(result < 25){
            document.getElementById("bmi-results").innerHTML = "Healthy";
        }
        else if(result < 30){
            document.getElementById("bmi-results").innerHTML = "Overweight";
        }
        else{
            document.getElementById("bmi-results").innerHTML = "Obesity";
        }
    }
};

const register = body => axios.post("http://localhost:4004/api/email/" , body)
.then(res => {
    console.log(res.data);
    createEmail(res.data);
    alert(`${res.data.email} has been registered to our weekly newsletter`)
});

function Email() {
    const email = document.getElementById("email-input").value;
    alert("Thank you for signing up to our weekly newsletter")
};

const underweightBtn = (req, res) => axios.get("http://localhost:4004/api/underweight/")

function Underweightbtn() {
    alert("In some cases, being underweight can be a sign of some underlying condition or disease such as anorexia nervosa, which has its own risks. Consult your doctor if you think you or someone you know is underweight, particularly if the reason for being underweight does not seem obvious.")
};

const healthyBtn = (req, res) => axios.get("http://localhost:4004/api/healthy/")
   

function Healthybtn() {
    alert("Below 18.5 – you're in the underweight range. between 18.5 and 24.9 – you're in the healthy weight range. between 25 and 29.9 – you're in the overweight range. between 30 and 39.9 – you're in the obese range.")
};

const overweightBtn = (req, res) => axios.get("http://localhost:4004/api/overweight/")

function Overweightbtn() {
    alert("if your BMI is less than 18.5, it falls within the underweight range. If your BMI is 18.5 to <25, it falls within the healthy weight range. If your BMI is 25.0 to <30, it falls within the overweight range. If your BMI is 30.0 or higher, it falls within the obesity range.")
};

const obeseBtn = (req, res) => axios.get(("http://localhost:4004/api/obese/"))

function Obesebtn() {
    alert("If your BMI is 30.0 or higher, it falls within the obesity range")
};


