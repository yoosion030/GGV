import styled from '@emotion/styled';
import { SelectProps } from 'types/Select';

export const ToggleButton = styled.div<SelectProps>`
  display: flex;
  align-items: center;
  height: 2.375rem;
  width: 5rem;
  background: ${({ select }) =>
    select === 'now_playing'
      ? 'linear-gradient(241.68deg, #ff937b 17.51%, #fd9094 100%)'
      : 'linear-gradient(241.68deg, #63FCBB 17.51%, #54EDC8 100%)'};
  border-radius: 1.875rem;
  cursor: pointer;
  padding: 0 0.25rem;
`;

export const SwitchHandle = styled.div<SelectProps>`
  height: 1.875rem;
  width: 1.875rem;
  border-radius: 1.875rem;
  background: #ffffff;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.2);
  border-radius: 1.875rem;
  ${({ select }) => select === 'upcoming' && 'transform: translateX(2.5rem)'};
  transition: 500ms;
`;
