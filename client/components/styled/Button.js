import styled from 'styled-components';

export const Button = styled.button`
    color: #000;
    border: 2px solid #000;
    background: transparent;
    padding: 5px 10px;
    cursor: pointer;
    box-shadow: 7px 5px 0 0 lightyellow;
    transition: 0.4s all ease;

    &:hover {
        box-shadow: 7px 5px 0 0 yellow;
    }
`;
