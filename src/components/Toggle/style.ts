import styled from '@emotion/styled';

interface SelectType {
  select: 'playing' | 'upcoming';
}

export const ToggleButton = styled.div<SelectType>`
  display: flex;
  align-items: center;
  height: 2.375rem;
  width: 5rem;
  background: ${({ select }) =>
    select === 'playing'
      ? 'linear-gradient(241.68deg, #ff937b 17.51%, #fd9094 100%)'
      : 'linear-gradient(241.68deg, #63FCBB 17.51%, #54EDC8 100%)'};
  border-radius: 1.875rem;
  cursor: pointer;
  padding: 0 0.25rem;
`;

export const SwitchHandle = styled.div<SelectType>`
  height: 1.875rem;
  width: 1.875rem;
  border-radius: 1.875rem;
  background: #ffffff;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.2);
  border-radius: 1.875rem;
  ${({ select }) => select === 'upcoming' && 'transform: translateX(2.5rem)'};
  transition: 500ms;
`;
