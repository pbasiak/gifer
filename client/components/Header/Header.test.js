import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';

describe('<Header/>', () => {

    afterAll(() => {
        jest.clearAllMocks();
    });

    it('should render correctly', () => {
        const wrapper = shallow(<Header />);
        expect(wrapper);
    });
})
