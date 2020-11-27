import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
	*,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-tap-highlight-color: transparent;
  }
  *:focus {
  outline: 0;
  outline: none;
  }
  html {
    font-size: 62.5%; // 1 rem == 10px
    box-sizing: border-box;
    --color-background: ${(props) => props.theme.colors.background};
		--color-shadow: ${(props) => props.theme.colors.shadow};
		--color-border: ${(props) => props.theme.colors.border};
		--color-borderLight: ${(props) => props.theme.colors.borderLight};
		--color-white: ${(props) => props.theme.colors.white};
		--color-black: ${(props) => props.theme.colors.black};
		--color-gray: ${(props) => props.theme.colors.gray};
		--color-grayLight: ${(props) => props.theme.colors.grayLight};
		--color-grayVeryLight: ${(props) => props.theme.colors.grayVeryLight};
		--color-grayDark: ${(props) => props.theme.colors.grayDark};
		--color-green: ${(props) => props.theme.colors.green};
		--color-lotofacil: ${(props) => props.theme.colors.lotofacil};
		--color-megasena: ${(props) => props.theme.colors.megasena};
		--color-lotomania: ${(props) => props.theme.colors.lotomania};

    @media (max-width: 600px) {
      font-size: 50%;
    }

    @media (min-width: 601px and max-width: 1099px) {
      font-size: 55%;
    }

    @media (min-width: 1800px) {
      font-size: 65%;
    }
  }
  body {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-style: italic;
    line-height: 1.6;
    background-color: var(--color-background);
    color: var(--color-gray);
  }
  a, button {
    cursor: pointer;
  }
  a, input, textarea, button, p {
    outline: none;
    text-decoration: none;
    font-family: inherit;
    font-style: inherit;
  },
  ul {
    list-style: none;
  }

`;
