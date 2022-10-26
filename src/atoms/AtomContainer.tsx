import { atom } from 'recoil';

export const LikeMovie = atom<number[] | null | undefined>({
  key: 'LikeMovie',
  default: null,
});
