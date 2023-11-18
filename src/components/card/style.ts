import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 0.4rem;
`;

export const ImgWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;

    img {
        border-radius: 0.125rem;
        border: 1px solid rgba(0, 0, 0, 0.20);
        background: lightgray 50%;
        box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    }
`;

export const NewsHeadline = styled.div`
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
    flex-shrink: 0;
    color: var(--Text, #2A2A2A);
    font-family: Poppins;
    font-size: 0.9375rem;
    font-style: normal;
    font-weight: 400;
    line-height: 165%;
    max-width: 33.75rem;
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
