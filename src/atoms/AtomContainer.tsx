import { atom } from 'recoil';

/**
 * 좋아요 누른 영화 아이디 배열
 */
export const LikeMovie = atom<number[] | null | undefined>({
  key: 'LikeMovie',
  default: null,
});
