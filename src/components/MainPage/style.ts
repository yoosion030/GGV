import styled from '@emotion/styled';

export const MainSection = styled.div`
  padding: 100px 200px;
  background-color: #1b1b1b;
`;

export const MainTitle = styled.h1`
  font-weight: 700;
  font-size: 32px;
  line-height: 38px;
  color: #ffffff;
  margin-bottom: 24px;
`;

export const MovieSection = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(356px, auto));
  justify-content: space-between;
  row-gap: 56px;
`;
