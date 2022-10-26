import styled from '@emotion/styled';

export const Movie = styled.a`
  color: #ffffff;
  display: inline-flex;
  flex-direction: column;
  justify-content: space-between;
  width: 350px;
  height: 576px;

  img {
    border-radius: 16px;
  }
`;

export const Title = styled.p`
  font-size: 24px;
`;

export const Overview = styled.p`
  width: 100%;
  line-height: 20px;
  overflow: hidden;
  text-overflow: ellipsis;
  word-wrap: break-word;
  display: -webkit-box;
  -webkit-line-clamp: 3; /* ellipsis line */
  -webkit-box-orient: vertical;
`;
