import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { FieldError } from 'react-hook-form';
import { shakeAnimation } from 'shared/styles/Animation';

export const RegisterBackground = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
    url(background.jpg);
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LogoWrapper = styled.div`
  position: absolute;
  left: 104px;
  top: 104px;
`;

export const RegisterSection = styled.form`
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
  justify-content: space-between;
`;

export const Title = styled.h1`
  font-family: 'GmarketSansMedium';
  font-size: 24px;
  margin-top: 23px;
`;

export const InputTitle = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  margin-bottom: 8px;
`;

interface ErrorStyleProps {
  errorStyle?: FieldError;
}

export const Input = styled.input<ErrorStyleProps>`
  height: 56px;
  background-color: #454545;
  border-radius: 8px;
  padding: 0 12px;
  font-size: 16px;
  margin-bottom: 40px;
  color: #ffffff;
  border: ${({ errorStyle }) => (errorStyle ? '1px solid #EB0707' : 'none')};
  animation: ${({ errorStyle }) =>
    errorStyle &&
    css`
      ${shakeAnimation} .5s
    `};
  &::placeholder {
    color: #808080;
  }
  :focus {
    border: 1px solid #ff937b;
    outline: none;
  }

  // 크롬 최적화
  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    -webkit-box-shadow: 0 0 0 30px #454545 inset !important;
    -webkit-text-fill-color: #ffffff;
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ErrorMessage = styled.p`
  color: #eb0707;
`;

export const Button = styled.button`
  display: block;
  width: 120px;
  height: 56px;
  background: linear-gradient(241.68deg, #ff937b 17.51%, #fd9094 100%);
  border-radius: 10px;
  border: none;
  cursor: pointer;
  margin-left: auto;
`;
