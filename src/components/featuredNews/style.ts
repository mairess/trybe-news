import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 0.4rem;
    flex-wrap: wrap;
    margin-top: 1rem;
`;

export const CardWrapper = styled.div`
    padding-top: 1rem;
`;

export const LatestFavoriteWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 1rem;
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
    
    @media screen and (width <= 480px) {
        img {
            width: 21rem;
        }
    }

    @media screen and (481px <= width <= 1280px) {
        img {
            width: 28.375rem;
        }
    }
`;

export const ReadTheNesTimestampWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 .4rem;
`;
