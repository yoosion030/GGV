import styled from '@emotion/styled';

export const Background = styled.div`
  width: 100%;
  height: 100vh;
  background: url(popularBackground.jpg), #040404;
  background-position: center;
  background-size: cover;
  backdrop-filter: blur(40px);
  background-repeat: no-repeat;
  padding: 11.25rem 9vw 0;
  overflow-x: hidden;

  img {
    border-radius: 1rem;
  }

  @media screen and (max-width: 1500px) {
    padding: 15rem 7vw 0;
  }

  @media screen and (max-width: 960px) {
    padding: 15rem 6vw;
    height: 100%;
  }

  @media screen and (max-width: 640px) {
    padding: 15rem 5vw;
  }
`;

export const Blur = styled.div`
  position: absolute;
  width: 100%;
  height: 100vh;
  left: 0px;
  top: 0px;
  background: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(10px);
  z-index: -2;

  @media screen and (max-width: 960px) {
    height: 100%;
  }
`;

export const PopularSection = styled.div`
  overflow: hidden;
  display: flex;
  gap: 1.5rem;

  animation-duration: 1s;
  animation-name: slidedown;

  @keyframes slidedown {
    from {
      margin-top: 100%;
    }

    to {
      margin-top: 0%;
    }
  }

  @media screen and (max-width: 960px) {
    flex-direction: column;
  }
`;

export const BestPoster = styled.a`
  width: 25vw;
  height: 66vh;
  position: relative;

  @media screen and (max-width: 960px) {
    width: 100%;
  }
`;

export const BestIcon = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 4.75rem;
  height: 2.313rem;
  background: rgba(255, 20, 20, 0.8);
  backdrop-filter: blur(7.5px);
  font-weight: 500;
  font-size: 1.125rem;
  line-height: 2.313rem;
  text-align: center;
  border-top-right-radius: 1rem;
  border-bottom-left-radius: 1rem;
  color: #ffffff;
`;

export const Number = styled.div`
  position: absolute;
  width: 1.25em;
  height: 2.375rem;
  left: 1rem;
  top: 1rem;
  font-style: normal;
  font-weight: 500;
  font-size: 2rem;
  color: #ffffff;
  text-shadow: 0px 2px 4px rgba(0, 0, 0, 0.5);
`;

export const InfoSection = styled.div`
  flex: 1;

  hr {
    width: 100%;
    border: 1px solid #545454;
    margin: 1rem 0;
  }
`;
export const ListSection = styled.div`
  display: flex;
  justify-content: space-between;

  animation-duration: 1s;
  animation-name: slidein;

  @keyframes slidein {
    from {
      margin-left: 100%;
      width: 300%;
    }

    to {
      margin-left: 0%;
      width: 100%;
    }
  }

  @media screen and (max-width: 640px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const BestOverview = styled.p`
  color: #d0d0d0;
  height: 21vh;

  @media screen and (max-width: 960px) {
    height: 10vh;
  }
`;

export const Movie = styled.a`
  position: relative;
  width: 16vw;
  height: 41vh;

  @media screen and (max-width: 960px) {
    width: 30%;
  }

  @media screen and (max-width: 640px) {
    width: 70vw;
    margin: 3rem 0;
  }
`;
