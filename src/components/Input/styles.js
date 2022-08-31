import styled from "styled-components";

export const StyledDiv = styled.div`
    margin-top: 10px;

    div {
        display: flex;
    }

    :hover input {
        outline: none;
        border-color: var(--cl-black);
    }

    :hover label {
        color: var(--cl-black);
    }
`;

export const StyledInput = styled.input`
    width: 100%;
    height: 44px;
    background-color: var(--cl-grey0);
    border-radius: 0.5rem;
    padding: 0 1rem;
    border: 2px solid transparent;
    font-size: 1rem;
    transition: border-color 0.3s cubic-bezier(0.25, 0.01, 0.25, 1) 0s,
        color 0.3s cubic-bezier(0.25, 0.01, 0.25, 1) 0s,
        background 0.2s cubic-bezier(0.25, 0.01, 0.25, 1) 0s;

    :hover,
    :focus {
        outline: none;
        border-color: var(--cl-black);
    }

    :focus {
        color: var(--cl-black);
    }
`;

export const StyledLabel = styled.label`
    display: block;
    margin-bottom: 0.3rem;
    font-size: 0.9rem;
    font-weight: bold;
    color: var(--cl-black);
    transition: color 0.3s cubic-bezier(0.25, 0.01, 0.25, 1) 0s;
`;

export const StyledSpan = styled.span`
    margin-bottom: 0.3rem;
    font-size: 0.9rem;
    font-weight: bold;
    color: var(--cl-red);
    margin-left: 10px;
`;
