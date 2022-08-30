import styled from "styled-components";

export const StyledLi = styled.li`
    width: 95%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 80px;
    background-color: var(--cl-grey1);
    border-radius: 4px;
    padding: 8px 16px;
    margin-top: 10px;
    cursor: pointer;

    :hover {
        background-color: var(--cl-grey2);
        transition: 0.3s ease;
    }

    @media (min-width: 1024px) {
        width: 98%;
        height: 40px;
        flex-direction: row;
        justify-content: space-between
    }
`;

export const StyedDiv = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;

    h3 {
        font-size: 18px;
    }

    @media (min-width: 1024px) {
        width: 44%;
    }
`;

export const StyledSpan = styled.span``;
