import React from 'react';

export default function SearchResults(props) {

    const { data } = props;

    return (
        <React.Fragment>
            {data}
        </React.Fragment>
    );
}
