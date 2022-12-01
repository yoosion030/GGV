import styled from '@emotion/styled';

export const Dropdown = styled.div`
  border-radius: 0.5em;
  cursor: pointer;
  width: 5.625em;
  height: 3em;
  background-color: #2b2b2b;
  text-align: center;
  line-height: 3em;
`;

export const Menu = styled.ul`
  position: absolute;
  right: 0;
  top: 3.75em;
  width: 7.5em;
  background: #2a2a2a;
  box-shadow: 0px 4px 24px rgba(0, 0, 0, 0.5);
  border-radius: 0.500em;
  z-index: 4;
  padding: 0.75em 0;

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
  height: 2.5em;
  padding-left: 1.5em;
  line-height: 2.5em;
  cursor: pointer;
  :hover {
    background-color: #1b1b1b;
  }
`;
