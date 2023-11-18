import styled from 'styled-components';

export const NewsContainer = styled.div`
    border: 1px solid green;
    /* width: 33.75rem;
    height: 20.5rem;
    flex-shrink: 0; */
`;

export const NewsHeadline = styled.div`
    border: 1px solid green;
    flex-shrink: 0;
    color: var(--Text, #2A2A2A);
    font-family: IBM Plex Serif;
    font-size: 2rem;
    font-style: normal;
    font-weight: 600;
    line-height: normal;

        /* width: 33.75rem;
        height: 7.6875rem;
        flex-shrink: 0; */
`;

export const NewsLead = styled.div`
    border: 1px solid green;
    flex-shrink: 0;
    color: var(--Text, #2A2A2A);
    font-family: Poppins;
    font-size: 0.9375rem;
    font-style: normal;
    font-weight: 400;
    line-height: 165%;

        /* width: 31.25rem;
        height: 5.875rem;
        flex-shrink: 0; */
`;

export const NewsTimestamp = styled.div`
    border: 1px solid green;
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
