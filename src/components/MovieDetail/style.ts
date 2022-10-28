import styled from '@emotion/styled';

export const MovieSection = styled.div`
  display: flex;
  gap: 40px;
  margin-bottom: 40px;
`;

export const TextSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

export const Title = styled.h1`
  font-weight: 700;
  font-size: 32px;
  line-height: 46px;
  color: #ffffff;
`;

export const InfoSection = styled.div`
  display: flex;
  gap: 40px;
`;

export const SubTitle = styled.p`
  font-weight: 500;
  font-size: 20px;
  line-height: 40px;
  color: #d0d0d0;
`;

export const MovieInfoText = styled.p`
  font-weight: 500;
  font-size: 20px;
  line-height: 40px;

  color: #ffffff;
`;

export const Button = styled.button`
  font-family: 'Noto Sans KR';
  width: 139px;
  height: 44px;
  background: linear-gradient(241.68deg, #ff937b 17.51%, #fd9094 100%);
  border-radius: 8px;
  margin-top: auto;
  border: none;
  cursor: pointer;
`;

export const OverviewSection = styled.div`
  padding-bottom: 100px;
  box-shadow: 0px 1px 0px rgb(255 255 255 / 25%);

  p {
    width: 80%;
  }
`;
