export class Invoice {
    client;
    details;
    amount;
    constructor(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `${this.client} wants a website that contains $ ${this.details} and his price is ${this.amount}`;
    }
}
