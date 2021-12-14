import { Invoice } from "./classes/Invoice.js";
import { LisTemplate } from "./classes/ListTemplate.js";
import { Payments } from "./classes/Payment.js";
const form = document.querySelector(".new-item-form");
const type = document.querySelector("#type");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
const tofrom = document.querySelector("#tofrom");
//List template instance
const ulElement = document.querySelector("ul");
const list = new LisTemplate(ulElement);
form.addEventListener("submit", (e) => {
    e.preventDefault();
    let document;
    let inputValues;
    inputValues = [tofrom.value, details.value, amount.valueAsNumber];
    if (type.value === "invoice") {
        document = new Invoice(...inputValues);
    }
    else {
        document = new Payments(...inputValues);
    }
    list.render(document, type.value, "start");
});
