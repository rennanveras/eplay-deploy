import { createGlobalStyle } from 'styled-components'

export const colors = {
  white: '#EEE',
  black: '#111',
  gray: '#333',
  green: '#10AC84',
  lightGray: '#999999'
}

export const breakpoint = {
  desktop: '1024px',
  tablet: '768px'
}

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;
    font-family: 'Roboto', sans-serif;
  }

  body {
    background-color: ${colors.black};
    color: ${colors.white};
    padding-top: 40px;
  }

  .container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;

    @media (max-width: ${breakpoint.desktop}) {
      max-width: 80%;
    }
  }
`
