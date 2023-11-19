import styled from 'styled-components';

type ContainerProps = {
  isFeatured?: boolean,
};

export const Container = styled.div<ContainerProps>`
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 0.4rem;
    flex-wrap: wrap;

    ${(props) => props.isFeatured && `    
    width: 27.375rem;
    height: 20.6875rem;
    flex-shrink: 0;
    background: #FFF;
    filter: drop-shadow(0px 2px 14px rgba(42, 42, 42, 0.24));
    padding: 0.5rem 0.4rem;

    h1 {
        color: var(--Text, #2A2A2A);
        font-family: IBM Plex Serif;
        font-size: 1.125rem;
        font-style: normal;
        font-weight: 600;
        line-height: 1.6875rem; /* 150% */
    }

    p {
        color: var(--Text, #2A2A2A);
        font-family: Nunito Sans;
        font-size: 0.9375rem;
        font-style: normal;
        font-weight: 400;
        line-height: 1.375rem; /* 146.667% */
    }

    button p {
        width: 8.1875rem;
        flex-shrink: 0;
        color: #000;
        text-align: center;
        font-family: Poppins;
        font-size: 0.875rem;
        font-style: normal;
        font-weight: 700;
        line-height: 165%;
    }
    `}
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
