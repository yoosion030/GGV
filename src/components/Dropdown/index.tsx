import { css } from '@emotion/react';
import { GenreId } from 'atoms';
import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import * as S from './style';

const Dropdown = () => {
  const [dropdownVisibility, setDropdownVisibility] = useState<boolean>(false);
  const [visibilityAnimation, setVisibilityAnimation] =
    useState<boolean>(false);
  useEffect(() => {
    if (dropdownVisibility) {
      setVisibilityAnimation(true);
    } else {
      setTimeout(() => {
        setVisibilityAnimation(false);
      }, 300);
    }
  }, [dropdownVisibility]);

  const [genreId, setGenreId] = useRecoilState(GenreId);
  const selectItem = (id: number) =>
    genreId === id &&
    css({
      backgroundColor: '#1b1b1b',
    });
  return (
    <>
      <S.Dropdown onClick={e => setDropdownVisibility(!dropdownVisibility)}>
        필터
      </S.Dropdown>
      {visibilityAnimation && (
        <S.Menu
          css={css`
            animation: ${dropdownVisibility
                ? 'slide-fade-in'
                : 'slide-fade-out'}
              0.3s ease;
          `}
        >
          <S.MenuItem onClick={() => setGenreId(10749)} css={selectItem(10749)}>
            로맨스
          </S.MenuItem>
          <S.MenuItem onClick={() => setGenreId(28)} css={selectItem(28)}>
            액션
          </S.MenuItem>
          <S.MenuItem onClick={() => setGenreId(27)} css={selectItem(27)}>
            호러
          </S.MenuItem>
          <S.MenuItem onClick={() => setGenreId(16)} css={selectItem(16)}>
            애니메이션
          </S.MenuItem>
          <S.MenuItem onClick={() => setGenreId(10752)} css={selectItem(10752)}>
            전쟁
          </S.MenuItem>
          <S.MenuItem onClick={() => setGenreId(35)} css={selectItem(35)}>
            코미디
          </S.MenuItem>
          <S.MenuItem onClick={() => setGenreId(null)}>선택해제</S.MenuItem>
        </S.Menu>
      )}
    </>
  );
};

export default Dropdown;
