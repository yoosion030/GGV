import styled from '@emotion/styled';

export const Header = styled.header`
  position: fixed;
  height: 80px;
  width: 100%;
  background: rgba(0, 0, 0, 0.1);
  box-shadow: 0px 1px 0px rgba(255, 255, 255, 0.25);
  backdrop-filter: blur(13.5px);
  z-index: 5;
  padding: 0 9.7vw;
  font-family: 'GmarketSansLight';
  a {
    color: #ffffff;
  }

  svg {
    width: 104px;
    height: 28px;
  }
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const LogoWrapper = styled.div`
  cursor: pointer;
`;

export const NavWrapper = styled.div`
  display: flex;
  gap: 2.3vw;
`;

export const Logo = styled.div`
  font-size: 32px;
`;

export const NavContent = styled.a`
  font-size: 18px;
`;
