import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin: 1.5rem 1rem;
`;

export const StyledButton = styled.button`
    width: 1.125rem;
    height: 1rem;
    flex-shrink: 0;
    fill: var(--Text, #2A2A2A);
    border: none;
    background: none;
    cursor: pointer;
`;

export const LatestNewsStamp = styled.div`
    flex-shrink: 0;
    color: var(--Main-Red, #C31815);
    font-family: Poppins;
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 600;
    line-height: 210%;
    letter-spacing: 0.0175rem;

`;
