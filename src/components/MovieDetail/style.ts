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
  width: 300px;
  height: 40px;
  font-weight: 500;
  font-size: 20px;
  line-height: 40px;
  color: #ffffff;
  overflow: hidden;
  word-break: normal;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const ButtonSection = styled.div`
  display: flex;
  gap: 16px;
  margin-top: auto;
`;

const button = styled.button`
  font-family: 'Noto Sans KR';
  height: 44px;
  cursor: pointer;
  border-radius: 8px;
  font-size: 16px;
  border: none;
`;

export const HomepageButton = styled(button)`
  width: 139px;
  background: linear-gradient(241.68deg, #ff937b 17.51%, #fd9094 100%);
`;

export const LikeButton = styled(button)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 106px;
  gap: 8px;
  background: #ffffff;
  div {
    width: 22px;
    height: 20px;
  }
`;

export const OverviewSection = styled.div`
  padding-bottom: 100px;
  box-shadow: 0px 1px 0px rgb(255 255 255 / 25%);

  p {
    width: 80%;
  }
`;
