import * as S from './style';
import * as I from 'assets/svg';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { getLocalstorage } from 'hooks';

const Header = () => {
  const [name, setName] = useState<string | null>('');
  const { push } = useRouter();

  useEffect(() => {
    setName(getLocalstorage('name'));
  }, []);

  return (
    <S.Header>
      <S.Nav>
        <S.LogoWrapper onClick={() => push('/')}>
          <I.Logo />
        </S.LogoWrapper>
        <S.NavWrapper>
          <S.NavContent href="/">영화 리스트</S.NavContent>
          <S.NavContent href="/user">{name}님 반가워요!</S.NavContent>
        </S.NavWrapper>
      </S.Nav>
    </S.Header>
  );
};

export default Header;
