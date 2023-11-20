import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 3rem;
    /* margin: 2rem; */
`;
export const Line = styled.div`
    margin: 1rem 0;
    height: 0.0625rem;
    flex-shrink: 0;
    background-color: #2A2A2A;
    opacity: 0.1;
`;

export const ButtonWrapper = styled.div`
    display: flex;
    justify-content: end;
    align-items: center;
`;
