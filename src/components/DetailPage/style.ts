import styled from '@emotion/styled';

export const DetailSection = styled.div`
  position: relative;
  width: 100%;
  min-height: 100vh;
  height: 100%;
  padding: 11.25rem 9vw 0;

  @media screen and (max-width: 1500px) {
    padding: 11.25rem 7vw 0;
  }

  @media screen and (max-width: 960px) {
    padding: 11.25rem 6vw 0;
  }

  @media screen and (max-width: 640px) {
    padding: 11.25rem 5vw 0;
  }
`;

export const SimilarSection = styled.div`
  padding: 2.5rem 0 10rem;
`;

export const Blur = styled.div`
  position: fixed;
  width: inherit;
  height: inherit;
  left: 0px;
  top: 0px;
  background: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(50px);
  z-index: -1;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
`;
