export class Pass {
    constructor(vehicle, expiry, price) {
        this.id = ": Pass-" + new Date().getTime();
        this.vehicle = vehicle;
        this.expiry = expiry;
        this.price = price;
    }

    print() {
        let passToBePrint = `
        <div>
            <label for="">Pass id </label>
            <label for="">${this.id}</label>
        </div>
    
        <div>
            <label for="">Vehicle id </label>
            <label for="">${this.vehicle.id}</label>
        </div>
    
        <div>
            <label for="">Owner name </label>
            <label for="">${this.vehicle.owner.name}</label>
        </div>
    
        <div>
            <label for="">Expiry date </label>
            <label for="">${this.expiry}</label>
        </div>
        `
        let ticket = document.getElementById("ticket")
        ticket.innerHTML = passToBePrint;
    }

}