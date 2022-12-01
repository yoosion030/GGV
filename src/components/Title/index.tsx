import { SerializedStyles } from '@emotion/react';
import { ChildrenPropsType } from 'types/Children';
import * as S from './style';

interface TitleProps extends ChildrenPropsType {
  style?: SerializedStyles;
}

const Title: React.FC<TitleProps> = ({ children, style }) => {
  return <S.Title css={style}>{children}</S.Title>;
};

export default Title;
