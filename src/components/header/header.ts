import styled from 'styled-components';
import logo_trybe from '../../assets/logo_trybe.png';

export const Container = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: rgba(14, 14, 14, 0.85);
    filter: drop-shadow(0px 4px 28px rgba(0, 0, 0, 0.25));
`;

export const Logo = styled.div`
    width: 16rem;
    height: 13.1875rem;
    flex-shrink: 0;
    background: url(${logo_trybe});
    margin-left: 0;
    background-size: cover;
    background-repeat: no-repeat;

    @media screen and (max-width: 480px) {
        width: 8rem;
        height: 6.5rem;
    }

    @media screen and (min-width: 481px) and (max-width: 1024px) {
        width: 10rem;
        height: 8rem;
    }
`;

export const Title = styled.h1`
    width: 100%;
    text-align: center; 
    
    color: #FFF;
    font-family: Poller One;
    font-size: 5.375rem;
    font-style: normal;
    font-weight: 400;
    line-height: 0.9375rem;
    letter-spacing: 0.1rem;

    @media screen and (max-width: 480px) {
        font-size: 3rem;
        line-height: 3.0rem;
    }

    @media screen and (min-width: 481px) and (max-width: 1024px) {
        font-size: 4.3rem;
        line-height: 3.5rem;
    }
`;
