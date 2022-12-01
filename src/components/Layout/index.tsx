import React from 'react';
import { ChildrenPropsType } from 'types/Children';
import * as S from './style';

const Layout: React.FC<ChildrenPropsType> = ({ children }) => {
  return <S.Layout>{children}</S.Layout>;
};

export default Layout;
