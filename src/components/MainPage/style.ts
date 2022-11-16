import styled from '@emotion/styled';

export const MainSection = styled.div`
  padding: 100px 9vw;
  background-color: #1a1919;
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
`;

export const MovieSection = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(17vw, auto));
  justify-content: space-between;
  row-gap: 3.2vw;
`;
