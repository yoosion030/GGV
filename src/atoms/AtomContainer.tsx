import { atom } from 'jotai';
import { SelectType } from 'types/Select';

export const LikeMovie = atom<number[] | null | undefined>([]);

export const Select = atom<SelectType>('now_playing');

export const GenreId = atom<number | null>(null);
