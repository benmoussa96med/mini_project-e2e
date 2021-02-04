import { Selector } from 'testcafe';

export const RegisterElements = {
    email: Selector('#input3'),
    password: Selector('#input5'),
    firstName: Selector('#input7'),
    lastName: Selector('#input9'),
    btnRegister: Selector('input.button.button-primary'),
    msgAccept: Selector('.center'),
    msgAccept1: Selector('.alt-heading').withText('Create your Okta-dev-842917 account')
};