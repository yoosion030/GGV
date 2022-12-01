import styled from '@emotion/styled';

export const MainSection = styled.div`
  padding: 100px 9vw;
  background-color: #1a1919;
`;

export const MainHeader = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
`;

export const ToggleSection = styled.div`
  display: flex;
  gap: 24px;
`;

export const MainTitle = styled.h1`
  font-weight: 700;
  font-size: 32px;
  line-height: 38px;
  color: #ffffff;
  margin-bottom: 24px;
  cursor: pointer;

  @media screen and (max-width: 960px) {
    font-size: 28px;
  }

  @media screen and (max-width: 640px) {
    font-size: 16px;
  }
`;

export const MovieSection = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(17vw, auto));
  justify-content: space-between;
  row-gap: 3.2vw;

  @media screen and (max-width: 960px) {
    grid-template-columns: repeat(auto-fill, minmax(35vw, auto));
  }

  @media screen and (max-width: 640px) {
    grid-template-columns: repeat(auto-fill, minmax(70vw, auto));
    justify-content: center;
  }
`;
