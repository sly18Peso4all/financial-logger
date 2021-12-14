export class Payments {
    recepient;
    details;
    amount;
    constructor(recepient, details, amount) {
        this.recepient = recepient;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `Mr ${this.recepient} is owed $${this.amount} for building a ${this.details} website`;
    }
}
