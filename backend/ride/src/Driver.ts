import Person from "./Person";

export default class Driver {
    constructor() {}
    addPDriver (name: string, document: string, email: string, placa: string) {
        const person = new Person(name, document, email);
        return { driver_id: "123" }
    }
}