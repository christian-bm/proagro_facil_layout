import styled from "styled-components";

export const StyledDiv = styled.div`
    border-radius: 8px;
    width: 97%;
    max-width: 460px;
    margin: 0px auto;
    padding: 4px;
    height: 48px;
    background-color: var(--cl-grey0);
    display: flex;
    justify-content: center;

    .button_hidden {
        display: none;
    }

    .main_button {
        background-color: #003300;
        cursor: default;
    }

    .button_last,
    .button_next {
        font-size: 2em;
        svg {
            transform: translateY(3px);
        }
    }

    .div_last,
    .div_next {
        display: flex;
        max-width: 210px;
        width: 45%;
    }

    .div_last {
        justify-content: flex-end;

        button {
            margin-right: 10px;
        }

        .button_last {
            margin-right: auto;
        }
    }

    .div_next {
        justify-content: flex-start;

        button {
            margin-left: 10px;
        }

        .button_next {
            margin-left: auto;
        }
    }

    @media (min-width: 768px) {
        .button_hidden {
            display: block;
        }
    }
`;
