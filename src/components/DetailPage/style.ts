import styled from '@emotion/styled';
export const Background = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  padding: 180px 9.7vw 0;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  background-color: rgba(27, 27, 27, 0.8);
  z-index: -5;
`;

export const Blur = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0px;
  top: 0px;
  background: rgba(0, 0, 0, 0.3);

  z-index: -2;
  backdrop-filter: blur(50px);
`;

export const SimilarSection = styled.div`
  padding: 40px 0 160px;
`;

export const SimilarTitle = styled.h1`
  font-weight: 700;
  font-size: 32px;
  line-height: 38px;
  color: #ffffff;
  margin-bottom: 24px;
`;

export const SimilarMovieSection = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(356px, auto));
  justify-content: space-between;
  row-gap: 56px;
`;
