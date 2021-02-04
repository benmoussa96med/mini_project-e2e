const Chance = require('chance');
const chanceObj = new Chance();

export function generatPerson() {
    const firstName = chanceObj.last().toLowerCase();
    const lastName = chanceObj.first().toLowerCase();
    const rand = Math.ceil(Math.random() * 100);
    const email = (firstName + rand + lastName + '@gmail.com').replace(' ', '');
    return {
        firstName: firstName,
        lastname: lastName,
        email: email,
    };
}