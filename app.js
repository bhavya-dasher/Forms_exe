import { Bike } from "./Bike.js";
import { Car } from "./Car.js";
import { Cycle } from "./Cycle.js";
import { Faculty } from "./Faculty.js";
import { Student } from "./Student.js";
import { MonthlyPass } from "./MonthlyPass.js";
import { DailyPass } from "./DailyPass.js";
import { YearlyPass } from "./YearlyPass.js";



const users = []
const vehicles = []
const passes = []

document.addEventListener("DOMContentLoaded", () => {
    let userSubmitButton = document.getElementById("userSubmitButton");
    userSubmitButton.addEventListener('click', registerUser)
    let vehicleSubmitButton = document.getElementById("vehicleSubmitButton");
    vehicleSubmitButton.addEventListener('click', registerVehicle)

})

const showPassChoice = (vehicle) => {

    let dailyPass = new DailyPass(vehicle);
    let monthlyPass = new MonthlyPass(vehicle);
    let yearlyPass = new YearlyPass(vehicle);

    let passChoice = document.getElementById('passChoice')
    let button = document.createElement("INPUT")
    button.setAttribute('type', "button")
    button.value = "Daily : " + dailyPass.price;
    button.addEventListener('click', () => {
        passes.push(dailyPass);
        dailyPass.print();
    })
    passChoice.appendChild(button)

    button = document.createElement("INPUT")
    button.setAttribute('type', "button")
    button.value = "Monthly : " + monthlyPass.price;
    button.addEventListener('click', () => {
        passes.push(monthlyPass);
        monthlyPass.print();
    })
    passChoice.appendChild(button)

    button = document.createElement("INPUT")
    button.setAttribute('type', "button")
    button.value = "Yearly : " + yearlyPass.price;
    button.addEventListener('click', () => {
        passes.push(yearlyPass);
        yearlyPass.print();
    })
    passChoice.appendChild(button)

}

const registerUser = (e) => {
    e.preventDefault();
    let userName = document.getElementById('userName').value
    let userContact = document.getElementById('userContact').value
    let userRole = document.getElementById('userRole').value

    let user = null;
    switch (userRole) {
        case "student":
            user = new Student(userName, userContact)
            break;
        case "faculty":
            user = new Faculty(userName, userContact)
            break;
    }
    users.push(user);
    console.log(users)
}

const registerVehicle = (e) => {
    e.preventDefault();
    let vehicleName = document.getElementById('vehicleName').value
    let vehicleType = document.getElementById('vehicleType').value
    let owner = users[users.length - 1]

    let vehicle = null;
    switch (vehicleType) {
        case "cycle":
            vehicle = new Cycle(vehicleName, owner)
            break;
        case "bike":
            vehicle = new Bike(vehicleName, owner)
            break;
        case "car":
            vehicle = new Car(vehicleName, owner)
            break;
        default:
            console.log("No valid choice")
    }
    vehicles.push(vehicle);
    console.log(vehicles)
    showPassChoice(vehicle);
}