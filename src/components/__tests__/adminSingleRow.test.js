import React from 'react';
import {shallow, mount} from 'enzyme';
import {Router} from 'react-router-dom';
import SingleRow from '../../adminComponents/singleRow';

describe('single book row in admin dashboard table', () => {
    it('library row', () => {
       const book = {
            "title": "title",
            "author": "author",
            "category": "category",
            "url": "url",
        }
        const component = mount(<Router><SingleRow book={book}/></Router>);
        expect(component.state().book).toEqual(book);
    })
})

