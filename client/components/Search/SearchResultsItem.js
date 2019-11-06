import React from 'react';
import { SSearchResultsImage } from './styled/SSearchResultsImage';

export default function SearchResultItem(props) {

    const { imageUrl } = props;

    return (
        <React.Fragment>
            <SSearchResultsImage src={imageUrl} alt=""/>
        </React.Fragment>
    );
}
