import { atom } from 'recoil';
import { SelectType } from 'types/Select';

/**
 * 좋아요 누른 영화 아이디 배열
 */
export const LikeMovie = atom<number[] | null | undefined>({
  key: 'LikeMovie',
  default: null,
});

/**
 * 상영 예정 / 상영 중 영화 선택
 */
export const Select = atom<SelectType>({
  key: 'Select',
  default: 'now_playing',
});

/**
 * 필터 선택 Id
 */
export const GenreId = atom<number | null>({
  key: 'GenreId',
  default: null,
});
