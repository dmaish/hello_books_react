import React from 'react';
import {mount, shallow} from 'enzyme';
import AllBooks from '../allbooks';

describe ('allbooks table renders', () => {
    it(() => {
        const allbooks = [{author: "John grisham", 
        borrowed_flag: false, 
        category: "Law Thriller", 
        id: 14, 
        title: "The Firm"}]
        const component = mount(<AllBooks booksProp={allbooks}/>)
        expect(component.state().allbooks).toEqual(allbooks)
    })
    it(() => {
        const allbooks = [{author: "John grisham", 
        borrowed_flag: false, 
        category: "Law Thriller", 
        id: 14, 
        title: "The Firm"}]
        const component = shallow(<AllBooks booksProp={allbooks}/>)
        expect(component.find('div.card').length).toBe(true)
    })
})