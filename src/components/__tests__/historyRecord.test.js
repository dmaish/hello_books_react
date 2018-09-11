import React from 'react';
import {shallow, mount} from 'enzyme';
import HistoryRecord from '../historyRecord';

describe ('history record', () => {
    it('history record row', () => {
        const singleBook = {
             "title": "title",
             "author": "author",
             "category": "category",
             "url": "url",
         }
         const component = mount(<HistoryRecord singleBook={singleBook} />);
         expect(component.state().singleBook).toEqual(singleBook);
})
})