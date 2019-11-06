import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { SSearchInput } from './SSearchInput';
import 'jest-styled-components';

describe('<SSearchInput/>', () => {
    it('should match snapshot', () => {
        const wrapper = shallow(<SSearchInput />);
        expect(toJson(wrapper)).toMatchSnapshot();
    });
})
