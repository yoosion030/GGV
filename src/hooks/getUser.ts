import { getLocalstorage } from './getLocalstorage';

export const getUser = () => {
  return ['year', 'month', 'date', 'name']
    .map(value => getLocalstorage(value))
    .join('');
};
