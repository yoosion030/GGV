import styled from '@emotion/styled';

export const UserSection = styled.div`
  width: 100%;
  padding: 144px 200px;
`;

export const Title = styled.h1`
  font-family: 'Noto Sans';
  font-style: normal;
  font-weight: 600;
  font-size: 40px;
  line-height: 54px;

  color: #ffffff;
  text-align: center;
  margin-bottom: 32px;
`;

export const MovieSection = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(356px, auto));
  justify-content: space-between;
  row-gap: 56px;
`;

export const InfoText = styled.p`
  text-align: center;
  margin-top: 300px;
  font-size: 24px;
  line-height: 54px;
`;
