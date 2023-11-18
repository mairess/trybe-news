import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const StyledButton = styled.button`
    width: 1.125rem;
    height: 1rem;
    flex-shrink: 0;

    fill: var(--Text, #2A2A2A);

    border: none;
    background: none;
`;
