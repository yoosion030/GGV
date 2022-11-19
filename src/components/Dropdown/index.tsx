import { GenreId } from 'atoms';
import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import * as S from './style';

const Dropdown = () => {
  const [dropdownVisibility, setDropdownVisibility] = useState<boolean>(false);
  const [genreId, setGenreId] = useRecoilState(GenreId);
  return (
    <>
      <S.Dropdown onClick={e => setDropdownVisibility(!dropdownVisibility)}>
        필터
      </S.Dropdown>
      {dropdownVisibility && (
        <S.Menu>
          <S.MenuItem onClick={() => setGenreId(10749)}>로맨스</S.MenuItem>
          <S.MenuItem onClick={() => setGenreId(28)}>액션</S.MenuItem>
          <S.MenuItem onClick={() => setGenreId(27)}>호러</S.MenuItem>
          <S.MenuItem onClick={() => setGenreId(16)}>애니메이션</S.MenuItem>
          <S.MenuItem onClick={() => setGenreId(10752)}>전쟁</S.MenuItem>
          <S.MenuItem onClick={() => setGenreId(35)}>코미디</S.MenuItem>
          <S.MenuItem onClick={() => setGenreId(null)}>선택해제</S.MenuItem>
        </S.Menu>
      )}
    </>
  );
};

export default Dropdown;
