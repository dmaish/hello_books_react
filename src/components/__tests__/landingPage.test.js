import React from 'react';
import {shallow, mount} from 'enzyme';
import {Router} from 'react-router-dom'
import LandingPage from '../landingPage';
import Navbar from '../../commonComponents/navbar'

describe('landing page', () => {
    it('navbar renders', () => {
        const wrapper = shallow(<LandingPage />);
        expect(wrapper.find('div').first().hasClass('landingPage')).toBe(true);
    })
})