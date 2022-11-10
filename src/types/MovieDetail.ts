export interface DetailDataType {
  data: MovieDetailType;
}

interface ArrayType {
  name: string;
}

export interface MovieDetailType {
  id: number;
  title: string;
  poster_path: string;
  release_date: string;
  budget: number;
  runtime: number;
  original_language: string;
  overview: string;
  homepage: string;
  production_companies: ArrayType[];
  genres: ArrayType[];
  genre_ids: number[];
}
