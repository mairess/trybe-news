import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 1rem;
    height: 3.1875rem;
    flex-shrink: 0;
    background: rgba(255, 255, 255, 0.85);
    backdrop-filter: blur(14px);
    margin: 1rem 0;

    @media screen and (max-width: 480px) {
        font-size: 0.8rem;
        line-height: 3.5rem;
        height: 2.1875rem;
    }
`;

export const ContainerButtons = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 40%;
    color: var(--Text, #2A2A2A);
    font-family: Poppins;
    font-size: 1.125rem;
    font-style: normal;
    font-weight: 600;
    line-height: normal;

    @media screen and (max-width: 768px) {
        width: 100%;
    }

    @media screen and (min-width: 769px) and (max-width: 1400px){
        width: 100%;
    }
`;

export const Button = styled.button`
    background-color: transparent;
    border: none;
    border-bottom: 2px solid transparent;

    color: var(--Text, #2A2A2A);
    font-family: Poppins;
    font-size: 1.125rem;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    cursor: pointer;

    &:hover {
        border-bottom-color: #C31815;
    }

     &.selected {
        color: #C31815;
        border-bottom-color: #C31815;
    }

    @media screen and (max-width: 768px) {
        font-size: 0.8rem;
        line-height: 3.5rem;
    }

    @media screen and (min-width: 769px) and (max-width: 1400px){
        font-size: 0.8rem;
        line-height: 3.5rem;
    }
`;
