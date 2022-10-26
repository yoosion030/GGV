import { LikeMovie } from 'atoms';
import { Header, UserMovie } from 'components';
import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import * as S from './style';

const UserPage = () => {
  const [name, setName] = useState<string | null>('');
  const [likeMovie, setLikeMovie] = useRecoilState(LikeMovie);

  useEffect(() => {
    setName(window.localStorage.getItem('name'));
    const result = window.localStorage.getItem('likeMovie');
    if (result !== null) {
      setLikeMovie(JSON.parse(result));
    }
  }, []);

  return (
    <>
      <Header />

      <S.UserSection>
        <S.Title>{name}님이 고른 영화 🍿</S.Title>
        {likeMovie?.length === 0 ? (
          <S.InfoText>저장한 영화가 없습니다.</S.InfoText>
        ) : (
          <S.MovieSection>
            {likeMovie?.map((id, i) => (
              <UserMovie id={id} key={i} />
            ))}
          </S.MovieSection>
        )}
      </S.UserSection>
    </>
  );
};

export default UserPage;
