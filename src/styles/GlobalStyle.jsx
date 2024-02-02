import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        font-family: 'Poppins', sans-serif;
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    body {
        color: #fff;
        background-color: #060417;
    }

    ul {
        list-style: none;
    }

    a {
        text-decoration: none;
    }

    ::-webkit-scrollbar {
        background-color: #060417;
        width: 0.6rem;
    }

    ::-webkit-scrollbar-thumb {
        background-color: #463682;
        border-radius: 0.2rem;
    }
`