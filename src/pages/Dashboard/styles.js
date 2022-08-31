import styled from "styled-components";

export const StyledMain = styled.main`
    display: flex;
    flex-direction: column;
    max-width: 1440px;
    width: 100%;
    margin: 25px auto;

    @media (min-width: 768px) {
        padding: 0px 40px;
    }
`;
