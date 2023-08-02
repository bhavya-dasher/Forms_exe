import { Pass } from "./Pass.js";

export class DailyPass extends Pass {
    constructor(vehicle) {
        let currentDateTime = new Date();
        currentDateTime.setDate(currentDateTime.getDate() + 1);
        let price = 0;
        switch (vehicle.type) {
            case "cycle":
                price = 5;
                break;
            case "bike":
                price = 10;
                break;
            case "car":
                price = 20;
                break;
        }
        super(vehicle, currentDateTime, price);
        this.type = "daily";

    }
}