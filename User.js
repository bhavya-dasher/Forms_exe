export class User {
    constructor(name, contact) {
        this.name = name;
        this.contact = contact;
        this.id = "user-" + new Date().getTime();

    }
}