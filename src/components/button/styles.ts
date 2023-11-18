import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: .5rem 0;
`;

export const StyledButton = styled.button`
    display: flex;
    width: 10.4375rem;
    height: 2.25rem;
    padding: 0.625rem;
    justify-content: center;
    align-items: center;
    gap: 0.625rem;
    flex-shrink: 0;

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
        line-height: 165%; /* 1.44375rem */
    }

`;

export const NewsTimestamp = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 7.875rem;
    height: 1.25rem;
    flex-shrink: 0;

    color: var(--Text, #2A2A2A);
    font-family: Poppins;
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 400;
    line-height: 165%;
`;
