import { HasFormatter } from "../interfaces/HasFormatter.js";

export class Payments implements HasFormatter {
  constructor(
    readonly recepient: string,
    private details: string,
    public amount: number
  ) {}

  format(): string {
    return `Mr ${this.recepient} is owed $${this.amount} for building a ${this.details} website`;
  }
}
