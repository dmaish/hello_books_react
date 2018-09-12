import React from 'react';
import {shallow, mount} from 'enzyme';
import Footer from '../../commonComponents/footer'

describe('test footer renders', () => {
    it(() => {
        const component = shallow(<Footer/>)
        expect(component.find('footer.footer').exists()).toBe(true)
    })
})