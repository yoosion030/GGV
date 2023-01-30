import { css } from '@emotion/react';
import { GenreId } from 'atoms';
import { useEffect, useState } from 'react';
import { useAtom } from 'jotai';
import * as S from './style';

interface MenuItemType {
  title: string;
  id: number | null;
}

const Dropdown = () => {
  const [dropdownVisibility, setDropdownVisibility] = useState<boolean>(false);
  const [visibilityAnimation, setVisibilityAnimation] =
    useState<boolean>(false);
  const [genreId, setGenreId] = useAtom(GenreId);

  const menuItemObject: MenuItemType[] = [
    { title: '로맨스', id: 10749 },
    { title: '액션', id: 28 },
    { title: '호러', id: 27 },
    { title: '애니메이션', id: 16 },
    { title: '전쟁', id: 10752 },
    { title: '코미디', id: 35 },
    { title: '선택해제', id: null },
  ];
  const selectItem = (id: number | null) =>
    genreId === id &&
    id !== null &&
    css({
      backgroundColor: '#1b1b1b',
      fontWeight: 'bold',
    });

  useEffect(() => {
    if (dropdownVisibility) {
      setVisibilityAnimation(true);
    } else {
      setTimeout(() => {
        setVisibilityAnimation(false);
      }, 300);
    }
  }, [dropdownVisibility]);

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
          {menuItemObject.map(menuItem => (
            <S.MenuItem
              key={menuItem.id}
              onClick={() => setGenreId(menuItem.id)}
              css={selectItem(menuItem.id)}
            >
              {menuItem.title}
            </S.MenuItem>
          ))}
        </S.Menu>
      )}
    </>
  );
};

export default Dropdown;
