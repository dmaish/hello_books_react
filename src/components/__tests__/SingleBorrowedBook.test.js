import React from 'react';
import {shallow, mount} from 'enzyme';
import SingleBorrowedBook from '../singleBorrowedBook';

describe('single borrowed book', () => {
        it('borrowed book row', () => {
           const book = {
                "title": "title",
                "author": "author",
                "category": "category",
                "url": "url",
            }
            const component = mount(<SingleBorrowedBook book={book} />);
            expect(component.state().singleBook).toEqual(book);
        })
})