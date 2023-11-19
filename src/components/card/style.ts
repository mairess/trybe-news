import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 0.4rem;
    flex-wrap: wrap;
`;

export const NewsHeadline = styled.div`
    text-align: justify;
    flex-shrink: 0;
    color: var(--Text, #2A2A2A);
    font-family: IBM Plex Serif;
    font-size: 1rem;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    max-width: 33.75rem;
`;

export const NewsLead = styled.div`
    text-align: justify;
    flex-shrink: 0;
    color: var(--Text, #2A2A2A);
    font-family: Poppins;
    font-size: 0.9375rem;
    font-style: normal;
    font-weight: 400;
    line-height: 165%;
    max-width: 33.75rem;
    margin: .5rem 0;
`;

export const NewsTimestamp = styled.div`
    width: 5.875rem;
    height: 1.25rem;
    flex-shrink: 0;

    color: var(--Text, #2A2A2A);
    font-family: Poppins;
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 400;
    line-height: 165%;
`;
