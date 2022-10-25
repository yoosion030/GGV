import styled from '@emotion/styled';

export const RegisterBackground = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
    url(background.jpg);
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    position: absolute;
    top: 220px;
    left: 400px;
  }
`;

export const RegisterSection = styled.div`
  width: 496px;
  height: 680px;
  background: rgba(0, 0, 0, 0.6);
  border: 1px solid rgba(255, 255, 255, 0.4);
  box-shadow: 0px 4px 18px rgba(0, 0, 0, 0.16);
  backdrop-filter: blur(12px);
  border-radius: 24px;
  padding: 32px;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h1`
  margin: 60px 0;
  font-family: 'GmarketSansMedium';
  font-size: 40px;
`;

export const InputSection = styled.form`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const InputTitle = styled.p`
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  margin-bottom: 8px;
`;

export const Input = styled.input`
  height: 56px;
  background: #454545;
  border-radius: 8px;
  border: none;
  outline: none;
  padding: 0 12px;
  font-size: 16px;
  margin-bottom: 40px;
  &::placeholder {
    color: #808080;
  }
  color: #ffffff;
`;

export const InputWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Button = styled.button`
  display: block;
  width: 120px;
  height: 56px;
  background: linear-gradient(241.68deg, #ff937b 17.51%, #fd9094 100%);
  border-radius: 10px;
  border: none;
  cursor: pointer;
  margin: auto 0 0 auto;
`;
