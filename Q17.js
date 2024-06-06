"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log("\t\nunfortunately, I can only invite two member for dinner\t\n");
let guests = ["amna\t", "suhana\t", "amena\t", "bilal\t", "qureshi\t", "habiba\t"];
while (guests.length > 2) {
    let removed_guest = guests.pop();
    console.log(`sorry ${removed_guest} I cant't invite you to dinner.`);
}
guests.forEach(guest => {
    console.log(`Dear ${guest} you are still invited to dinner.`);
});
guests.splice(0, guests.length),
    console.log(guests);
