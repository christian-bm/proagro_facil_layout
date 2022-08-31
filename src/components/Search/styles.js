import styled from "styled-components";

export const StyledDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 4px;
    max-width: 420px;
    align-self: center;
    width: 100%;

    div {
        display: flex;
        line-height: 28px;
        align-items: center;
        position: relative;
        width: 100%;
        max-width: 320px;

        input {
            width: 100%;
            height: 40px;
            line-height: 28px;
            padding: 0 1rem;
            padding-left: 2.5rem;
            border: 2px solid transparent;
            border-radius: 8px 0 0 8px;
            outline: none;
            background-color: var(--cl-grey0);
            color: var(--cl-black);
            transition: 0.3s ease;
        }

        input::placeholder {
            color: var(--cl-grey2);
        }

        input:focus,
        input:hover {
            outline: none;
            border-color: var(--cl-green);
        }

        .icon {
            position: absolute;
            left: 1rem;
            fill: var(--cl-grey2);
            width: 1rem;
            height: 1rem;
        }
    }

    button {
        border-radius: 0 8px 8px 0;
    }

    @media (min-width: 768px) {
        justify-content: flex-end;
        align-self: flex-end;
        padding: 0px;
    }
`;
