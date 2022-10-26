import { Header } from 'components';
import { useEffect, useState } from 'react';
import * as S from './style';

const UserPage = () => {
  const [name, setName] = useState<string | null>('');
  useEffect(() => {
    setName(window.localStorage.getItem('name'));
  }, []);
  return (
    <>
      <Header />

      <S.UserSection>
        <S.Title>{name}님이 고른 영화 🍿</S.Title>
      </S.UserSection>
    </>
  );
};

export default UserPage;
