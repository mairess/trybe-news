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

export const CardWrapper = styled.div`
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

export const ButtonLoadMore = styled.button`
    width: 13.75rem;
    height: 3.75rem;
    flex-shrink: 0;
    border-radius: 0.125rem;
    border: 1px solid #C31815;
    opacity: 0.28;

    color: #C31815;
    text-align: center;
    font-family: Poppins;
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 500;
    line-height: 0.9375rem;
    letter-spacing: 0.1rem;
    text-transform: uppercase;
`;

export const ButtonLoadMoreWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 1rem 0;
`;
