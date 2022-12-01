import styled from '@emotion/styled';

export const MainSection = styled.div`
  padding: 100px 9vw;
  background-color: #1a1919;

  @media screen and (max-width: 640px) {
    padding: 100px 5vw;
  }
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
  font-size: 2rem;
  line-height: 38px;
  color: #ffffff;
  margin-bottom: 24px;
  cursor: pointer;
`;
