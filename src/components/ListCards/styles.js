import styled from "styled-components";

export const StyledUl = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: var(--cl-grey0);
    margin: 15px 4px;
    padding-bottom: 10px;
    border-radius: 8px;
    height: 910px;

    @media (min-width: 768px) {
        margin: 15px 0px;
        height: 510px;
    }
`;

export const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    height: 100px;

    @media (min-width: 768px) {
        height: 40px;
        flex-direction: row-reverse;
        justify-content: space-between;
    }
`;

export const StyledLi = styled.li`
    width: 95%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 80px;
    border-radius: 4px;
    padding: 8px 16px;
    margin-top: 10px;
    text-align: center;

    @media (min-width: 768px) {
        span {
            font-size: 18px;
        }
    }
`;
