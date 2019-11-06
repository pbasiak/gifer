import React from 'react';
import { SSearchInput } from './styled/SSearchInput';

export default function SearchInput(props) {

    const {onChange} = props;

    return (
        <React.Fragment>
            <SSearchInput type="text" onChange={onChange} placeholder="Type something..." />
        </React.Fragment>
    );
}
