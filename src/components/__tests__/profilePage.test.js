import React from 'react';
import {shallow, mount} from 'enzyme';
import ProfilePage from '../profilePage';

describe(' user profile page', () => {
    it('renders', () => {
            expect(shallow(<ProfilePage/>).find('img.avatar').exists()).toBe(true);
    })
})