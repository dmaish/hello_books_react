import React from 'react';
import { shallow } from 'enzyme';
import SignIn from '../signin';

describe('My signIn component', () => {
    it('should render correctly in "debug" mode', () => {
        const wrapper = shallow(<SignIn debug />);
        expect(wrapper).toMatchSnapshot();
    });
});
