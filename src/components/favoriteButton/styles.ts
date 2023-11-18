import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;

    margin: 0.4rem 1rem;
`;

export const StyledButton = styled.button`
    width: 1.125rem;
    height: 1rem;
    flex-shrink: 0;

    fill: var(--Text, #2A2A2A);

    border: none;
    background: none;
`;

export const LatestNewsStamp = styled.div`
    /* width: 9.6875rem; */
    /* height: 1.125rem; */
    flex-shrink: 0;

    color: var(--Main-Red, #C31815);
    font-family: Poppins;
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 600;
    line-height: 210%; /* 1.8375rem */
    letter-spacing: 0.0175rem;

`;
