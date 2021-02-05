import { loginUrl, password } from '../utils/constant.util';
import { generatLogin } from '../page-objects/login.po';
fixture('Welcome login').page(loginUrl);

test('welcome for connecte user', async t => {
    //Arrnage
    const email = 'donnelly85harry@gmail.com';
    //Act
    await t
        .debug()
        .typeText(generatLogin.userName, email)
        .typeText(generatLogin.password, password)
        .click(generatLogin.checkRemember)
        .click(generatLogin.singIn)
        .wait(4000)
        //Asset

})