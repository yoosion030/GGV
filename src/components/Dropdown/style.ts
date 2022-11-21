import styled from '@emotion/styled';

export const Dropdown = styled.div`
  border-radius: 8px;
  cursor: pointer;
  width: 90px;
  height: 48px;
  background-color: #2b2b2b;
  text-align: center;
  line-height: 48px;
  position: relative;
  z-index: 100;
`;

export const Menu = styled.ul`
  position: absolute;
  right: 0;
  top: 60px;
  width: 120px;
  background: #2a2a2a;
  box-shadow: 0px 4px 24px rgba(0, 0, 0, 0.5);
  border-radius: 8px;
  z-index: 4;
  padding: 12px 0;

  @keyframes slide-fade-in {
    from {
      opacity: 0;
      visibility: hidden;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      visibility: visible;
      transform: translateY(0);
    }
  }

  @keyframes slide-fade-out {
    from {
      opacity: 1;
      visibility: visible;
      transform: translateY(0);
    }
    to {
      opacity: 0;
      visibility: hidden;
      transform: translateY(-10px);
    }
  }
  overflow: hidden;
`;

export const MenuItem = styled.li`
  height: 40px;
  padding-left: 24px;
  line-height: 40px;
  cursor: pointer;
  :hover {
    background-color: #1b1b1b;
  }
`;
