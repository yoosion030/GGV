import { ChildrenPropsType } from 'types/Children';
import * as S from './style';

const Title: React.FC<ChildrenPropsType> = ({ children }) => {
  return <S.Title>{children}</S.Title>;
};

export default Title;
