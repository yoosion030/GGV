import styled from '@emotion/styled';

export const MainSection = styled.div`
  padding: 100px 9.7vw;
  background-color: #1a1919;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const MovieSection = styled.div`
  overflow: hidden;
  &::-webkit-scrollbar {
    display: none;
  }
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

export const ScrollSection = styled.div`
  display: flex;
  width: 100%;
  overflow-y: scroll;
  gap: 40px;
  height: 100%;
  margin-bottom: 112px;
  padding-right: 120px;

  &::-webkit-scrollbar {
    display: none;
  }
`;
