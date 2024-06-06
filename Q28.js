"use strict";
let cycle = 25;
if (cycle < 2) {
    console.log("the person is baby");
}
else if (cycle < 4) {
    console.log("the person is a toddler");
}
else if (cycle < 14) {
    console.log("the person is a kid");
}
else if (cycle < 20) {
    console.log("the person is a teenager");
}
else if (cycle < 50) {
    console.log("the person is adult");
}
else {
    console.log("the person is elder");
}
