export interface MovieData {
  data: {
    dates: any;
    page: number;
    results: MovieType[];
  };
}

export interface MovieType {
  id: number;
  title: string;
  poster_path: string;
  release_date: string;
}
