import React from 'react';
import * as S from './style';

interface LayoutProps {
  children: React.ReactNode;
}
const Layout: React.FC<LayoutProps> = ({ children }) => {
  return <S.Layout>{children}</S.Layout>;
};

export default Layout;
