import styled from '@emotion/styled';

export const Background = styled.div`
  width: 100%;
  height: 100vh;
  background: url(popularBackground.jpg), #040404;
  background-position: center;
  background-size: cover;
  backdrop-filter: blur(40px);
  background-repeat: no-repeat;
  padding: 180px 200px 0;

  img {
    border-radius: 16px;
    cursor: pointer;
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
  display: flex;
  gap: 40px;
`;

export const BestPoster = styled.div`
  width: 487px;
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
`;

export const InfoSection = styled.div`
  /* display: flex; */
  flex: 1;

  hr {
    width: 100%;
    border: 1px solid #545454;
    margin: 16px 0;
  }
`;

export const BestTitle = styled.h1`
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 58px;
  color: #ffffff;
`;

export const BestOverview = styled.p`
  color: #d0d0d0;
  height: 207px;
`;

export const ListSection = styled.div`
  display: flex;
  justify-content: space-between;
`;
