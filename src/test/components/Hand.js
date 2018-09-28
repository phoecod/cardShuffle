import { shallow } from 'enzyme';
import React from 'react';
import {Hand} from '../../components/ActionButton';

test('should render actionButton correctly', ()=>{
    const wrapper = shallow(<Hand/>);
	expect(wrapper).toMatchSnapshot();
});