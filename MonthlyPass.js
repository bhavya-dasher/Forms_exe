import { Pass } from "./Pass.js";

export class MonthlyPass extends Pass {
    constructor(vehicle) {
        let currentDateTime = new Date();
        currentDateTime.setMonth(currentDateTime.getMonth() + 1);
        let price = 0;
        switch (vehicle.type) {
            case "cycle":
                price = 50;
                break;
            case "bike":
                price = 100;
                break;
            case "car":
                price = 500;
                break;
        }
        super(vehicle, currentDateTime, price);
        this.type = "monthly";

    }
}