import * as S from './style';
import * as I from 'assets/svg';
import { useEffect, useState } from 'react';

const Header = () => {
  const [name, setName] = useState<string | null>('');
  useEffect(() => {
    setName(window.localStorage.getItem('name'));
  }, []);
  return (
    <S.Header>
      <S.Nav>
        <I.Logo />
        <S.NavWrapper>
          <S.NavContent href="/">영화 리스트</S.NavContent>
          <S.NavContent href="/user">{name}님 반가워요!</S.NavContent>
        </S.NavWrapper>
      </S.Nav>
    </S.Header>
  );
};

export default Header;
