import React from 'react';
import { Container } from '../styled/Container';
import { SHeader } from './styled/SHeader';

export default function Header() {

    return (
        <SHeader>
            <Container>
                <h1>Gifer App</h1>
            </Container>
        </SHeader>
    );
}
