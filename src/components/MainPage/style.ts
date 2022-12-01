import styled from '@emotion/styled';

export const MainSection = styled.div`
  padding: 6.25rem 9vw;
  background-color: #1a1919;

  @media screen and (max-width: 1500px) {
    padding: 6.25rem 7vw;
  }

  @media screen and (max-width: 960px) {
    padding: 6.25rem 6vw;
  }

  @media screen and (max-width: 640px) {
    padding: 8.333rem 5vw;
  }
`;

export const MainHeader = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
`;

export const ToggleSection = styled.div`
  display: flex;
  gap: 1rem;
`;
