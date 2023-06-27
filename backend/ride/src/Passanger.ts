import Person from "./Person";

export default class Passanger {
    constructor() {}
    addPassanger (name: string, document: string, email: string) {
        const person = new Person(name, document, email);
        return { passanger_id: "123" }
    }
}