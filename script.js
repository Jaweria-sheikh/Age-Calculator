const birthday = document.getElementById("birthday");
const result = document.getElementById("result");

function calculateAge(){
    let dob = birthday.value;
    if(dob === ""){
        alert("Please Enter your Birthday");
    }
    else{
        let age = getAge(dob);
        result.innerText = `Your age is ${age} years Old`;
    }
}

function getAge(dob){
    let currentDate = new Date();
    let birthdayDate = new Date(dob);
    let age = currentDate.getFullYear() - birthdayDate.getFullYear()
    let month = currentDate.getMonth() - birthdayDate.getMonth();


    if(month < 0 || month === 0 && currentDate.getDate() < birthdayDate.getDate()){
        age--
    }
    return age;
}