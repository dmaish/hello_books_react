import React from 'react';
import {shallow, mount} from 'enzyme';
import BookRow from '../bookRow';

describe('single library row', () => {
    it('library row', () => {
       const book = {
            "title": "title",
            "author": "author",
            "category": "category",
            "url": "url",
        }
        const component = mount(<BookRow book={book} />);
        expect(component.state().book).toEqual(book);
    })
})