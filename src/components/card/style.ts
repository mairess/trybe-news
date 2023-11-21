import styled from 'styled-components';

export const Container = styled.div`
    min-height: 21.875rem;
    max-width: 33.75rem;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;
    padding: 0 1rem;
    flex-wrap: wrap;
`;

export const NewsHeadline = styled.div`
    flex-shrink: 0;

    h1 {
        text-align: justify;
        color: var(--Text, #2A2A2A); // review to create root color pallet
        font-family: IBM Plex Serif;
        font-size: 2rem;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
    }
    
    @media screen and (max-width: 480px) {
        h1 {
            font-size: 1.4rem;
        }
    }
`;

export const NewsLead = styled.div`
    flex-shrink: 0;

    p {
        text-align: justify;
        color: var(--Text, #2A2A2A); // review to create root color pallet
        font-family: Poppins;
        font-size: 0.9375rem;
        font-style: normal;
        font-weight: 400;
        line-height: 165%;
    }

    @media screen and (max-width: 480px) {
        p {
            font-size: 0.75rem;
        }
    }
`;

export const ReadTheNesTimestampWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 .4rem;
    padding: 0 1rem;
`;
