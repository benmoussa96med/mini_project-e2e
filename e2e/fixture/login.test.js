import { loginUrl, password } from '../utils/constant.util';
import { generatLogin } from '../page-objects/login.po';
fixture('Welcome login').page(loginUrl);

test('welcome for connecte user', async t => {
    //Arrnage
    const email = 'donnelly85harry@gmail.com';
    const question = 'What is your favorite security question?';
    const anserQuest = 'i love play football and color red and black';
    //Act
    await t
        .debug()
        .typeText(generatLogin.userName, email)
        .typeText(generatLogin.password, password)
        .click(generatLogin.checkRemember)
        .click(generatLogin.singIn)
        .click(generatLogin.selectQuestion)
        .click(generatLogin.selectOption.withText('What is the name of your first stuffed animal?'))
        .typeText(generatLogin.customQuestion, question)
        //Asset

})