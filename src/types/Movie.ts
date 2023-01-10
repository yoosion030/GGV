export interface MovieDataType {
  data: {
    results: MovieType[];
  };
}

export interface MovieType {
  id: number;
  title: string;
  poster_path: string;
  release_date: string;
  overview: string;
  genre_ids: number[];
}

export interface MovieDataPropsType {
  playing: MovieType[];
  upcoming: MovieType[];
  popular: MovieType[];
}
