import styled from '@emotion/styled';

export const Dropdown = styled.div`
  border-radius: 0.5rem;
  cursor: pointer;
  width: 5.625rem;
  height: 3rem;
  background-color: #2b2b2b;
  text-align: center;
  line-height: 3rem;
`;

export const Menu = styled.ul`
  position: absolute;
  right: 0;
  top: 3.75rem;
  width: 7.5rem;
  background: #2a2a2a;
  box-shadow: 0px 4px 24px rgba(0, 0, 0, 0.5);
  border-radius: 0.5rem;
  z-index: 4;
  padding: 0.75rem 0;

  @keyframes slide-fade-in {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes slide-fade-out {
    from {
      opacity: 1;
      transform: translateY(0);
    }
    to {
      opacity: 0;
      transform: translateY(-10px);
    }
  }
`;

export const MenuItem = styled.li`
  height: 2.5rem;
  padding-left: 1.5rem;
  line-height: 2.5rem;
  cursor: pointer;
  :hover {
    background-color: #1b1b1b;
  }
`;
