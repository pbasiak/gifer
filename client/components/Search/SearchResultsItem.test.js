import React from 'react';
import { shallow, mount } from 'enzyme';
import SearchResultsItem from './SearchResultsItem';
import { SSearchResultsImage } from './styled/SSearchResultsImage';
import { Growler } from '../styled/Growler';
import { CopyToClipboard } from 'react-copy-to-clipboard';

describe('<SearchResultItem/>', () => {

    it('should render correctly', () => {
        const wrapper = shallow(<SearchResultsItem />);
        expect(wrapper);
    });

    it('should render correctly with imageUrl prop', () => {
        const wrapper = shallow(<SearchResultsItem imageUrl="fakeUrl" />);
        expect(wrapper.find(SSearchResultsImage).exists()).toBeTruthy();
    });
})
