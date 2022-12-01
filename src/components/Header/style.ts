import styled from '@emotion/styled';

export const Header = styled.header`
  position: fixed;
  height: 5rem;
  width: 100%;
  background: rgba(0, 0, 0, 0.1);
  box-shadow: 0px 1px 0px rgba(255, 255, 255, 0.25);
  backdrop-filter: blur(13.5px);
  z-index: 5;
  padding: 0 9vw;
  font-family: 'GmarketSansLight';
  a {
    color: #ffffff;
  }

  svg {
    width: 6.5rem;
    height: 1.75rem;
  }

  @media screen and (max-width: 640px) {
    padding: 0 5vw;
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
  font-size: 2rem;
`;

export const NavContent = styled.a`
  font-size: 1.125rem;
`;
