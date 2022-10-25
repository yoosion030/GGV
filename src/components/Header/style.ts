import styled from '@emotion/styled';

export const Header = styled.header`
  position: fixed;
  height: 80px;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.1);
  box-shadow: 0px 1px 0px rgba(255, 255, 255, 0.25);
  backdrop-filter: blur(13.5px);
  z-index: 5;
  padding: 0 200px;
  font-family: 'GmarketSansLight';
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const Logo = styled.div`
  font-size: 32px;
`;

export const NavContent = styled.div`
  font-size: 18px;
`;
