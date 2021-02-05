import { loginUrl, password } from '../utils/constant.util';
import { generatLogin } from '../page-objects/login.po';
fixture('Welcome login').page(loginUrl);

test('welcome for connecte user', async t => {
    //Arrnage
    const email = 'donnelly85harry@gmail.com';
    const anserQuestion = 'i love play football and i swimming';
    //Act
    await t
        .debug()
        .typeText(generatLogin.userName, email)
        .typeText(generatLogin.password, password)
        .click(generatLogin.checkRemember)
        .click(generatLogin.singIn)
        .click(generatLogin.selectQuestion)
        .click(generatLogin.selectOption.withText('What is your favorite security question?'));

    await t.typeText(generatLogin.replyAnswer, anserQuestion)
        //Asset

})