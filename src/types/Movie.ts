export interface MovieData {
  data: {
    results: MovieType[];
  };
}

export interface MovieType {
  id: number;
  title: string;
  poster_path: string;
  release_date: string;
}
