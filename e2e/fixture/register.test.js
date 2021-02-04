import { baseUrl, password } from '../utils/constant.util';
import { RegisterElements } from '../page-objects/register.po';
import { generatPerson } from '../utils/person.util';


fixture('Welcome register').page(baseUrl);

test('welcome for register new user', async t => {
    //Arrnage
    const person = generatPerson();
    //Act
    await t
        .debug()
        .typeText(RegisterElements.email, person.email)
        .typeText(RegisterElements.password, password)
        .typeText(RegisterElements.firstName, person.firstName)
        .typeText(RegisterElements.lastName, person.lastname)
        .click(RegisterElements.btnRegister);
    //Asset
    await t.expect(RegisterElements.msgAccept.innerText).contains(person.firstName);
    await t.expect(RegisterElements.msgAccept1.exists).ok()
})