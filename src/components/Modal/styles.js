import styled from "styled-components";

export const ModalContainer = styled.div`
    width: 100vw;
    z-index: 99;
    padding: 20px 20px;
    min-height: 100vh;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.8);
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: auto;

    .modal-box {
        background-color: var(--cl-white);
        color: var(--cl-black);
        max-width: 335px;
        width: 100%;
        border-radius: 8px;
        overflow: auto;
        animation: scaleUp 1s;
        max-height: 100%;
        position: relative;
    }

    .modal-box::-webkit-scrollbar {
        width: 8px;
        border-radius: 4px;
        background-color: var(--cl-grey0);
    }
    .modal-box::-webkit-scrollbar-thumb {
        border-radius: 4px;
        background-color: var(--cl-grey2);
    }
    .modal-box::-webkit-scrollbar-track {
        background-color: transparent;
    }
    .modal-box::-webkit-scrollbar-button {
        height: 10px;
        background-color: transparent;
    }

    .modal-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        background-color: var(--cl-white);
        padding: 16px;
        border-bottom: 1px solid var(--cl-black);
        position: sticky;
        top: 0;
        left: 0;
        z-index: 99;
        span,
        svg {
            cursor: pointer;
            color: var(--cl-black);
        }
    }
    .modal-body {
        padding: 0px 16px 10px;
        overflow: auto;
    }

    .modal-footer {
        display: flex;
        align-items: center;
        justify-content: space-around;
        background-color: var(--cl-white);
        padding: 8px;
        border-top: 1px solid var(--cl-black);
        position: sticky;
        bottom: 0;
        z-index: 99;
    }

    @keyframes scaleUp {
        from {
            transform: scale(0);
            opacity: 0;
        }
        to {
            transform: scale(1);
            opacity: 1;
        }
    }
`;
