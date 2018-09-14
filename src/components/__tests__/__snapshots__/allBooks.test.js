import React from 'react';
import {shallow, mount} from 'enzyme';
import AllBooks from '../../allbooks';
import BookRow from '../../bookRow';

describe('allbooks', () => {
    it('allbooksCard renders', () => {
        expect(shallow(<AllBooks/>).find('table.table').exists()).toBe(false)
    })
})

describe('<Allbooks/>', () => {
    it('contains an <BookRow/> component', function () {
      const wrapper = mount(<AllBooks/>);
      expect(wrapper.find(BookRow).exists()).toBe(false)
    })
})