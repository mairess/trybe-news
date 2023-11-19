import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 0.4rem;
    flex-wrap: wrap;

    /* @media screen and (max-width: 480px) {
        flex-direction: column;
    } */
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
