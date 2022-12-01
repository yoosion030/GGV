import styled from '@emotion/styled';

interface SelectType {
  select: 'playing' | 'upcoming';
}

export const ToggleButton = styled.div<SelectType>`
  display: flex;
  align-items: center;
  height: 38px;
  width: 5rem;
  background: ${({ select }) =>
    select === 'playing'
      ? 'linear-gradient(241.68deg, #ff937b 17.51%, #fd9094 100%)'
      : 'linear-gradient(241.68deg, #63FCBB 17.51%, #54EDC8 100%)'};
  border-radius: 30px;
  cursor: pointer;
  padding: 0 4px;
`;

export const SwitchHandle = styled.div<SelectType>`
  height: 30px;
  width: 30px;
  border-radius: 30px;
  background: #ffffff;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.2);
  border-radius: 30px;
  ${({ select }) => select === 'upcoming' && 'transform: translateX(34px)'};
  transition: 500ms;
`;
