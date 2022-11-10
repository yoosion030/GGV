import { LikeMovie } from 'atoms';
import { Header, UserMovie } from 'components';
import { getLocalstorage } from 'hooks';
import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import * as S from './style';

const UserPage = () => {
  const [name, setName] = useState<string | null>('');
  const [likeMovie, setLikeMovie] = useRecoilState(LikeMovie);

  useEffect(() => {
    const userInfo = ['year', 'month', 'date', 'name']
      .map(value => getLocalstorage(value))
      .join('');

    setName(window.localStorage.getItem('name'));
    const result = window.localStorage.getItem(userInfo);
    if (result !== null) {
      // 로컬스토리지에 저장된 아이디 배열 가져오기
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
            {/* likeMovie에 id가 있다면 UserMovie 컴포넌트 보여주기 */}
            {likeMovie?.map(
              id => likeMovie.includes(id) && <UserMovie id={id} key={id} />,
            )}
          </S.MovieSection>
        )}
      </S.UserSection>
    </>
  );
};

export default UserPage;
