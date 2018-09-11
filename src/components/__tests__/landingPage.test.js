import React from 'react';
import {shallow, mount} from 'enzyme';
import LandingPage from '../landingPage';
import Navbar from '../../commonComponents/navbar'

describe('landing page', () => {
    it('navbar renders', () => {
        const wrapper = mount(<LandingPage/>);
        expect(wrapper.find(Navbar)).to.have.length(1);
    })
})