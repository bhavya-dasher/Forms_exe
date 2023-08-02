import { Vehicle } from "./Vehicle.js";

export class Car extends Vehicle {
    constructor(name, owner) {
        super(name, owner);
        this.type = "car";
    }

}