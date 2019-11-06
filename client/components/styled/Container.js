import styled from 'styled-components';

export const Container = styled.div`
    max-width: 1100px;
    margin: 0 auto;
    ${props => props.align === 'center' ? 'text-align: center;' : undefined}
`;
