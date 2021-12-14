import { Invoice } from "./classes/Invoice.js";
import { LisTemplate } from "./classes/ListTemplate.js";
import { Payments } from "./classes/Payment.js";
import { HasFormatter } from "./interfaces/HasFormatter.js";

const form = document.querySelector(".new-item-form") as HTMLFormElement;
const type = document.querySelector("#type") as HTMLSelectElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;
const tofrom = document.querySelector("#tofrom") as HTMLInputElement;

//List template instance
const ulElement = document.querySelector("ul")!;
const list = new LisTemplate(ulElement);

form.addEventListener("submit", (e: Event) => {
  e.preventDefault();

  let document: HasFormatter;

  let inputValues: [string, string, number];
  inputValues = [tofrom.value, details.value, amount.valueAsNumber];

  if (type.value === "invoice") {
    document = new Invoice(...inputValues);
  } else {
    document = new Payments(...inputValues);
  }

  list.render(document, type.value, "start");
});
