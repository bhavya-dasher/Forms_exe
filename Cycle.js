import { Vehicle } from "./Vehicle.js";

export class Cycle extends Vehicle {
    constructor(name, owner) {
        super(name, owner);
        this.type = "cycle";
    }
}