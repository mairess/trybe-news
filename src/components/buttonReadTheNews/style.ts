import styled from 'styled-components';

export const Button = styled.button`
    display: flex;
    width: 10.4375rem;
    height: 2.25rem;
    padding: 0.625rem;
    justify-content: center;
    align-items: center;
    gap: 0.625rem;
    flex-shrink: 0;
    cursor: pointer;

    border-radius: 0.3125rem;
    background: #05D465;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

    p {
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

`;
