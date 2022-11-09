import styled from '@emotion/styled';

export const MainSection = styled.div`
  padding: 100px 9.7vw;
  background-color: #1a1919;
  width: 100vw;
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
  overflow: hidden;
`;

export const ScrollSection = styled.div`
  display: flex;
  width: 100vw;
  overflow-y: scroll;
  gap: 40px;

  height: 100%;

  div {
    width: 350px;
  }
`;
