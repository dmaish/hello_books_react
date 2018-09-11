import React from 'react';
import { shallow } from 'enzyme';
import SignIn from '../signin';

describe('My signIn component', () => {
    it('should render correctly in "debug" mode', () => {
        const wrapper = shallow(<SignIn/>);
        expect(wrapper).toMatchSnapshot();
    });
});

//make our assertion that form in component is being rendered
// make sure the inputs on the signin form also render correctly
describe('Sigin component renders well', () => {
    it('form renders', () => {
        expect(shallow(<SignIn/>).find('form.signInForm').exists()).toBe(true)
    }),
    it('email field renders', () => {
        expect(shallow(<SignIn/>).find('#loginEmail').length).toEqual(1)
    }),
    it('password field renders', () => {
        expect(shallow(<SignIn/>).find('#loginPassword').length).toEqual(1)
    })
})

// test if state changes on signup formfield input
describe('login form fields inputs', () => {
    it('should respond to change event and change the state of the Login Component', () => {
        const wrapper = shallow(<SignIn />);
        wrapper.find('#loginEmail').simulate('change', {target: {name: 'email', value: 'blah@gmail.com'}});
        expect(wrapper.state('email')).toEqual('blah@gmail.com');
    })
    it('should respond to change event and change the state of the Login Component', () => {
        const wrapper = shallow(<SignIn />);
        wrapper.find('#passwordField').simulate('change', {target: {name: 'password', value: 'Edmond1!'}});
        expect(wrapper.state(password)).toEqual('Edmond1');
       })
})