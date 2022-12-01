import { SerializedStyles } from '@emotion/react';
import React from 'react';
import { ChildrenPropsType } from 'types/Children';
import * as S from './style';

interface TitleProps extends ChildrenPropsType {
  style?: SerializedStyles | false;
  onClick?: () => void;
}

const Title: React.FC<TitleProps> = ({ children, style, onClick }) => {
  return (
    <S.Title css={style} onClick={onClick}>
      {children}
    </S.Title>
  );
};

export default Title;
