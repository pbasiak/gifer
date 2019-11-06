import React from 'react';
import { Box } from '../styled/Box';

export default function SearchResults(props) {

    const { children } = props;

    return (
        <Box display="flex" flexWrap="wrap" justifyContent="center" alignItems="flex-start">
            {
                !!children.length ? children : 'Not found'
            }
        </Box>
    );
}
