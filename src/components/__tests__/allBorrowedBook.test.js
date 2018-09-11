import React from 'react';
import {shallow, mount} from 'enzyme';
import AllBorrowedBooks from '../allBorrowedBook';

describe('test allBorrowedBooks component', () => {
    it('state should change',() => {
        const allbooks = [{author: "John grisham", 
        borrowed_flag: false, 
        category: "Law Thriller", 
        id: 14, 
        title: "The Firm"}]
        const component = <AllBorrowedBooks booksProp={allbooks}/>
        expect(mount(component).state().allbooks).toEqual(allbooks)
    }),
    it('state should change',() => {
        const allbooks = [{author: "John grisham", 
        borrowed_flag: false, 
        category: "Law Thriller", 
        id: 14, 
        title: "The Firm"}]
        const component = <AllBorrowedBooks booksProp={allbooks}/>
        expect(shallow(component).find('table.table').length).toBe(true)
    })
})