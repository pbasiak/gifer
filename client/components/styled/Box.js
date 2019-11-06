import styled from 'styled-components';

export const Box = styled.div`
    ${props => props.display && `display: ${props.display}`}
    ${props => props.flexDirection && `flex-direction: ${props.flexDirection}`}
    ${props => props.justifyContent && `justify-content: ${props.justifyContent}` }
    ${props => props.alignItems && `align-items: ${props.alignItems}` }
    ${props => props.flexWrap && `flex-wrap: ${props.flexWrap}` }
    margin-bottom: 20px;
`;
