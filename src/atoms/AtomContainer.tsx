import { atom } from 'recoil';

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

export const Select = atom<'playing' | 'upcoming'>({
  key: 'Select',
  default: 'playing',
});
