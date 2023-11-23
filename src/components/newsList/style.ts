import styled from 'styled-components';

export const NewsItemWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 3rem;
    margin-top: 1rem;
    padding-bottom: 1rem;
`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #FFF;
    filter: drop-shadow(0px 2px 14px rgba(42, 42, 42, 0.24));
    margin: 0 1rem;
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
    align-items: start;
    padding: 0 0.5rem 0.5rem;
`;
