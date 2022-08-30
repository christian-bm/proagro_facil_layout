import styled from "styled-components";

export const StyledHeader = styled.header`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 60px;
    background-color: var(--cl-green);
`;

export const StyledDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-width: 1440px;

    h1 {
        color: var(--cl-white);
    }

    @media (min-width: 768px) {
        padding: 0 40px;
        justify-content: flex-start;
    }
`;
