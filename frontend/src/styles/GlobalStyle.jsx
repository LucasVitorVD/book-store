import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Source Serif 4', serif;
    letter-spacing: -0.06188rem;
    color: ${({ theme }) => theme.colors.text[0]};
  }
`