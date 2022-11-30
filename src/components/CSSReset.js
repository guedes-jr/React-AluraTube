import { createGlobalStyle } from "styled-components";

export const CSSReset = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        scrollbar-gutter: stable both-edges;
    };

    body {
        font-family: sans-serif;
        background-color: ${({ theme }) => theme.backgroundBase};
        color: ${({ theme }) => theme.textColorBase};
    };
    html::-webkit-scrollbar {
       width: 6px;
    };

    html::-webkit-scrollbar-thumb {
        background: darkgray;
        border-radius: 5rem;
    };

    html::-webkit-scrollbar-thumb:hover {
        background: gray;
    };

    html {
        display: flex;
        flex-direction: column;
        min-height: 100%;
        overflow-x: hidden;
    };
    body {
        display: flex;
        flex: 1;
    };
    #__next {
        display: flex;
        flex: 1;
    };
    button,
    a {
        text-decoration: none;
        opacity: 1;
        transition: .3s;
        &:hover,
        &:focus {
            opacity: .5;
        };
    };
`;