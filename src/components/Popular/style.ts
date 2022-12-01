import styled from '@emotion/styled';

export const Background = styled.div`
  width: 100%;
  height: 100vh;
  background: url(popularBackground.jpg), #040404;
  background-position: center;
  background-size: cover;
  backdrop-filter: blur(40px);
  background-repeat: no-repeat;
  padding: 180px 9vw 0;
  overflow-x: hidden;

  img {
    border-radius: 16px;
  }

  @media screen and (max-width: 640px) {
    padding: 180px 5vw 0;
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
`;

export const PopularSection = styled.div`
  overflow: hidden;
  display: flex;
  gap: 2.3vw;

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
`;

export const BestPoster = styled.a`
  width: 25vw;
  height: 66vh;
  position: relative;
`;

export const BestIcon = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 76px;
  height: 37px;
  background: rgba(255, 20, 20, 0.8);
  backdrop-filter: blur(7.5px);
  font-weight: 500;
  font-size: 18px;
  line-height: 37px;
  text-align: center;
  border-top-right-radius: 16px;
  border-bottom-left-radius: 16px;
  color: #ffffff;
`;

export const Number = styled.div`
  position: absolute;
  width: 19px;
  height: 38px;
  left: 16px;
  top: 16px;
  font-style: normal;
  font-weight: 500;
  font-size: 32px;
  color: #ffffff;
  text-shadow: 0px 2px 4px rgba(0, 0, 0, 0.5);
`;

export const InfoSection = styled.div`
  flex: 1;

  hr {
    width: 100%;
    border: 1px solid #545454;
    margin: 16px 0;
  }
`;

export const Movie = styled.a`
  position: relative;
  width: 16vw;
  height: 41vh;
`;

export const BestOverview = styled.p`
  color: #d0d0d0;
  height: 21vh;
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
`;
