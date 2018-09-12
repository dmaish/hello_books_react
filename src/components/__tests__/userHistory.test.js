import React from 'react';
import {mount, shallow} from 'enzyme';
import UserHistory from '../userHistory';

describe('testing user history', () => {
    it(() => {
        const wrapper = mount(<UserHistory/>)
        wrapper.setState({
            "historyRecords": [{
                "author": "jake gyllenhall",
                "book id": 22,
                "category": "drama",
                "return_flag": true,
                "time_borrowed": "September 03, 2018 03:46",
                "time_returned": "September 03, 2018 13:14",
                "title": "southpaw"}]
     })
     expect(wrapper.find('table.table')).to.have.lengthOf(1);
    })
})