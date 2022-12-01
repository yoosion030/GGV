import styled from '@emotion/styled';

export const MovieSection = styled.div`
  display: flex;
  gap: 2.5rem;
  margin-bottom: 2.5rem;

  @media screen and (max-width: 960px) {
    gap: 1rem;
  }
`;

export const TextSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
`;

export const InfoSection = styled.div`
  display: flex;
  gap: 2.5rem;

  @media screen and (max-width: 960px) {
    gap: 1rem;
  }
`;

export const SubTitle = styled.p`
  font-weight: 500;
  font-size: 1.25rem;
  line-height: 2.5rem;
  color: #d0d0d0;
`;

export const MovieInfoText = styled.p`
  width: 18.75rem;
  height: 2.5rem;
  font-weight: 500;
  font-size: 1.25rem;
  line-height: 2.5rem;
  color: #ffffff;
  overflow: hidden;
  word-break: normal;
  white-space: nowrap;
  text-overflow: ellipsis;

  @media screen and (max-width: 960px) {
    width: 10rem;
  }
`;

export const ButtonSection = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: auto;
`;

const button = styled.button`
  font-family: 'Noto Sans KR';
  height: 2.75rem;
  cursor: pointer;
  border-radius: 0.5rem;
  font-size: 1rem;
  border: none;
`;

export const HomepageButton = styled(button)`
  width: 8.75rem;
  background: linear-gradient(241.68deg, #ff937b 17.51%, #fd9094 100%);
`;

export const LikeButton = styled(button)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 6.625rem;
  gap: 0.5rem;
  background: #ffffff;

  div {
    width: 1.375rem;
    height: 1.25rem;
  }

  svg {
    width: 1.375rem;
    height: 1.25rem;
  }
`;

export const OverviewSection = styled.div`
  padding-bottom: 6.25rem;
  box-shadow: 0px 1px 0px rgb(255 255 255 / 25%);

  p {
    width: 80%;
  }
`;
