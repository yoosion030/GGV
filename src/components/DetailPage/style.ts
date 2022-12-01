import styled from '@emotion/styled';

export const DetailSection = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  padding: 11.25em 9vw 0;

  @media screen and (max-width: 640px) {
    padding: 11.25em 5vw 0;
  }
`;

export const SimilarSection = styled.div`
  padding: 2.5em 0 10em;
`;

export const Blur = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0px;
  top: 0px;
  background: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(50px);
  z-index: -2;
`;

export const BackgroundImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  z-index: -5;
`;
