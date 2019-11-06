import React from 'react';
import toJson from 'enzyme-to-json';
import {shallow} from 'enzyme';
import 'jest-styled-components';
import { SSearchResultsImage } from './SSearchResultsImage';

it('should match snapshot', () => {
    const wrapper = shallow(<SSearchResultsImage />);
    expect(toJson(wrapper)).toMatchSnapshot();
});