import styled from '@emotion/styled';

export const Dropdown = styled.div`
  border-radius: 8px;
  cursor: pointer;
  width: 90px;
  height: 48px;
  background-color: #2b2b2b;
  text-align: center;
  line-height: 48px;
`;
export const Menu = styled.ul`
  position: absolute;
  right: 0;
  top: 58px;
  width: 120px;
  background: #2a2a2a;
  box-shadow: 0px 4px 24px rgba(0, 0, 0, 0.5);
  border-radius: 8px;
  z-index: 4;
  padding: 12px 0;

  @keyframes slide-fade-in-dropdown-animation {
    0% {
      transform: translateY(-100%);
    }

    100% {
      transform: translateY(0);
    }
  }

  @keyframes slide-fade-out-dropdown-animation {
    0% {
      transform: translateY(0);
    }

    100% {
      transform: translateY(-100%);
    }
  }
`;

export const MenuItem = styled.li`
  height: 40px;
  padding-left: 24px;
  line-height: 40px;
  cursor: pointer;
`;
