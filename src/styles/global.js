import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Roboto", sans-serif;
    }

    :root {
        --cl-green: #11823b;
        --cl-white: #ffffff;
        --cl-grey0: #e6e6e6;
        --cl-grey1: #d3d3d3;
        --cl-grey2: #b3b3b3;
        --cl-grey3: #4d4d4d;
        --cl-grey4: #333333;
        --cl-black: #1a1a1a;
        --cl-red: #801919;

        --toastify-color-success: var(--cl-green);
    }

    li {
        list-style: none;
    }

    button {
        cursor: pointer;
    }
`;
