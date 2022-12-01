import styled from '@emotion/styled';

export const Layout = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(17vw, auto));
  justify-content: space-between;
  row-gap: 3.2vw;

  @media screen and (max-width: 960px) {
    grid-template-columns: repeat(auto-fill, minmax(35vw, auto));
  }

  @media screen and (max-width: 640px) {
    grid-template-columns: repeat(auto-fill, minmax(70vw, auto));
  }
`;