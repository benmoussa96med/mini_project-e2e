import { Selector } from 'testcafe';

const selectQuest = Selector('select.x-created');
const selectOpt = selectQuest.find('option');

export const generatLogin = {
    userName: Selector('#okta-signin-username'),
    password: Selector('#okta-signin-password'),
    checkRemember: Selector('label').withText('Remember me'),
    singIn: Selector('#okta-signin-submit'),


    customQuestion: Selector('input.x-created'),

    // customQuestion: Selector('input.x-created'),

    selectQuestion: selectQuest,
    selectOption: selectOpt
};