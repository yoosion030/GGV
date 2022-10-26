import styled from '@emotion/styled';

export const Movie = styled.a`
  color: #ffffff;
  display: inline-block;
  width: 356px;
  height: 576px;

  img {
    border-radius: 16px;
  }
`;

export const Title = styled.p`
  font-size: 24px;
  line-height: 35px;
`;

export const Overview = styled.p`
  width: 100%;
  height: 60px;
  overflow: hidden;

  white-space: nowrap;
  text-overflow: ellipsis;
`;
