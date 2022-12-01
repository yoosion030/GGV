import styled from '@emotion/styled';

export const Movie = styled.div`
  position: relative;
  width: 17vw;
  height: 53vh;

  &:hover img {
    transform: scale(1.1);
  }

  img {
    transition: all 0.1s linear;
  }

  @media screen and (max-width: 960px) {
    width: 35vw;
  }

  @media screen and (max-width: 640px) {
    width: 70vw;
  }
`;

export const MovieInfo = styled.a`
  height: 100%;
  width: 17vw;
  color: #ffffff;
  display: inline-flex;
  flex-direction: column;
  justify-content: space-between;

  @media screen and (max-width: 960px) {
    width: 35vw;
  }

  @media screen and (max-width: 640px) {
    width: 70vw;
  }
`;

export const ImageWrapper = styled.div`
  position: relative;
  border-radius: 16px;
  overflow: hidden;
  width: 17vw;
  height: 41vh;

  @media screen and (max-width: 960px) {
    width: 35vw;
  }

  @media screen and (max-width: 640px) {
    width: 70vw;
  }
`;

export const Title = styled.p`
  font-size: 24px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const Overview = styled.p`
  width: 100%;
  height: 60px;
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
  width: 4vh;
  height: 4vh;
  left: 85%;
  top: 2%;

  background: rgba(0, 0, 0, 0.5);
  box-shadow: 0px 5.25px 5.25px rgba(0, 0, 0, 0.25);
  border-radius: 38.0625px;
  border: none;
  cursor: pointer;
  z-index: 3;
`;
