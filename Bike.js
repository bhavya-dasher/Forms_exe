import { Vehicle } from "./Vehicle.js";

export class Bike extends Vehicle {
    constructor(name, owner) {
        super(name, owner);
        this.type = "bike";
    }
}