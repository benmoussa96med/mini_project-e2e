import { Selector } from 'testcafe';

export const generatLogin = {
    userName: Selector('#okta-signin-username'),
    password: Selector('#okta-signin-password'),
    checkRemember: Selector('label').withText('Remember me'),
    singIn: Selector('#okta-signin-submit')
};