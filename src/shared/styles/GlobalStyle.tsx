import { css, Global } from '@emotion/react';
import emotionReset from 'emotion-reset';

export function GlobalStyle() {
  return (
    <Global
      styles={css`
        ${emotionReset}

        @font-face {
          font-family: 'GmarketSans';
          src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/GmarketSansMedium.woff')
            format('woff');
        }

        html {
          font-size: 16px;
          @media screen and (max-width: 960px) {
            font-size: 14px;
          }
          @media screen and (max-width: 640px) {
            font-size: 12px;
          }
        }

        body {
          font-family: 'Roboto', sans-serif;
          color: #ffffff;
          background-color: #191919;
        }

        a {
          text-decoration: none;
        }

        body::-webkit-scrollbar {
          width: 10px;
        }

        body::-webkit-scrollbar-thumb {
          background-color: #ccc;
          border-radius: 10px;

          height: 56px;
          background-clip: content-box;
        }

        body::-webkit-scrollbar-thumb:hover {
          background-color: #cbcbcb;
        }

        *,
        *::after,
        *::before {
          box-sizing: border-box;
          -moz-osx-font-smoothing: grayscale;
          -webkit-font-smoothing: antialiased;
          font-smoothing: antialiased;
        }

        input {
          font-family: 'GmarketSansMedium', sans-serif;
        }
      `}
    />
  );
}
