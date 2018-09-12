import React from 'react';
import {shallow, mount} from 'enzyme';
import ResetPage from '../resetPassword';

describe('reset password page', () => {
    it('card renders', () => {
        expect(shallow(<ResetPage/>).find('#resetcard').exists()).toBe(true);
    }),
    it('password field renders', () => {
        expect(shallow(<ResetPage/>).find('#passwordField').length).toEqual(1)
    }),
    it('submit button renders', () => {
        expect(shallow(<ResetPage/>).find('#submitButton').length).toEqual(1)
    })
})
