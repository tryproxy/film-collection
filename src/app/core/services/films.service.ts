import { computed, Injectable, signal } from '@angular/core';
import type { Movie } from '../../shared/model/types';
import { DB_MOVIES } from '../../shared/api/mock-db';

@Injectable({
  providedIn: 'root',
})
export class FilmsService {
  private readonly moviesState = signal<Movie[]>(
    Array.isArray(DB_MOVIES) ? (DB_MOVIES as Movie[]) : [],
  );
  private readonly errorState = signal<string | null>(
    Array.isArray(DB_MOVIES) && DB_MOVIES.length > 0 ? null : 'No data',
  );

  public readonly movies = this.moviesState.asReadonly();
  public readonly error = this.errorState.asReadonly();

  public readonly listFavoriteMovies = computed(() =>
    this.moviesState().filter(({ isFavorite }) => isFavorite),
  );

  public retrieveMovieById(id: number): Movie | undefined {
    return this.moviesState().find(({ id: index }) => id === index);
  }

  public toggleFavoriteMovieById(id: number): void {
    this.moviesState.update(movies =>
      movies.map(movie => {
        const { id: index, isFavorite } = movie;

        return id === index ? { ...movie, isFavorite: !isFavorite } : movie;
      }),
    );
  }
}
