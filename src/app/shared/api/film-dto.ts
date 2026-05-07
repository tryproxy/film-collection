export interface MovieDTO {
  id: number;
  title: string;
  year: number;
  genre: string;
  rating: number;
  duration: number;
  description: string;
  posterUrl: string;
  imdbUrl: string;
  watchUrl: string;
  isFavorite: boolean;
}
