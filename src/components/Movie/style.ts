import styled from '@emotion/styled';

export const Movie = styled.div`
  position: relative;
  width: 350px;
  height: 576px;


  &:hover img {
    transform: scale(1.1);
  }

  img {
    transition: all 0.1s linear;
  }
`;

export const MovieInfo = styled.a`
  height: 100%;
  width: 100%;
  color: #ffffff;
  display: inline-flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Title = styled.p`
  font-size: 24px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
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

export const LikeButton = styled.button`
  position: absolute;
  width: 42px;
  height: 42px;
  left: 296px;
  top: 12px;

  background: rgba(0, 0, 0, 0.5);
  box-shadow: 0px 5.25px 5.25px rgba(0, 0, 0, 0.25);
  border-radius: 38.0625px;
  border: none;
  cursor: pointer;
  z-index: 4;
`;
