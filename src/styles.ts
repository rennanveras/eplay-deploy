import styled, { createGlobalStyle } from 'styled-components'

export const cores = {
  branca: '#EEE',
  preto: '#111',
  cinza: '#333',
  verde: '#10AC84',
  cinzaClaro: '#999999'
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
    background-color: ${cores.preto};
    color: ${cores.branca};
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

export const Loading = styled.div`
  border: 5px solid #0585e2;
  border-radius: 50%;
  border-bottom: 5px solid transparent;
  height: 60px;
  width: 60px;
  animation: spinning 1s linear infinite;
  margin: 60px auto;
  @keyframes spinning {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`
