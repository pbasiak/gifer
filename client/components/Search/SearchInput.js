import React from 'react';
import { SSearchInput } from './styled/SSearchInput';
import { Button } from '../styled/Button';
import { Box } from '../styled/Box';

export default function SearchInput(props) {

    const { onSubmit, onInputValueChange } = props;

    const onKeyDown = (event) => {
        if (event.key === 'Enter') {
            onSubmit();
        }
    };

    return (
        <Box display="flex" alignItems="center" justifyContent="space-between">
            <SSearchInput
                type="text"
                onChange={onInputValueChange}
                placeholder="Type something..."
                onKeyDown={onKeyDown}
            />
            <Button onClick={onSubmit}>Send</Button>
        </Box>
    );
}
