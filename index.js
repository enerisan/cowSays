const student = require('./information');

const cowsay = require("cowsay");

console.log(cowsay.say({
    text : `I am ${student.name} and I study at campus ${student.campus}`,
    e : "oO",
    T : "U "
}));