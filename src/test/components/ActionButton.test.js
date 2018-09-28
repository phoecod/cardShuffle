import { shallow } from 'enzyme';
import React from 'react';
import {ActionButton} from '../../components/ActionButton';

test('should render actionButton correctly', ()=>{
    const wrapper = shallow(<ActionButton/>);
	expect(wrapper).toMatchSnapshot();
});