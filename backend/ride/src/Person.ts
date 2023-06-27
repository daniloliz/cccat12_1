import { validate } from './cpf';

export default class Person {
    constructor (readonly name: string, readonly document: string, readonly email: string) {
        if(!validate(this.document)) throw new Error("Invalid Document");
    }
}