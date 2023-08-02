import { Pass } from "./Pass.js";

export class YearlyPass extends Pass {
    constructor(vehicle) {
        let currentDateTime = new Date();
        currentDateTime.setFullYear(currentDateTime.getFullYear() + 1);
        let price = 0;
        switch (vehicle.type) {
            case "cycle":
                price = 500;
                break;
            case "bike":
                price = 1000;
                break;
            case "car":
                price = 1500;
                break;
        }
        super(vehicle, currentDateTime, price);
        this.type = "yearly";
    }
}