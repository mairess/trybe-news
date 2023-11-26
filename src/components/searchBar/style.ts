import styled from 'styled-components';

export const Container = styled.div`
    position: relative;
    width: 60%;
    @media screen and (min-width: 680px) {
        width: 50%;
    }
`;

export const Wrapper = styled.div`
    position: absolute;
    left: 10px;
    top: 5px;
    display: flex;
    align-items: center;
`;

export const Input = styled.input`
    height: 1.5rem;
    border-radius: 1rem;
    padding: 0.7rem 1.6rem;
    width: 100%;
`;
