export class Vehicle {
    constructor(name, owner) {
        this.id = ": vehicle-" + (new Date().getTime());
        this.name = name;
        this.owner = owner;
    }
}