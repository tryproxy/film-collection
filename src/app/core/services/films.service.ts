import { Injectable } from '@angular/core';
import type { Movie } from '../../shared/model/types';
import { DB_MOVIES } from '../../shared/api/mock-db';

@Injectable({
  providedIn: 'root',
})
export class FilmsService {
  public listMovies(): Movie[] {
    if (DB_MOVIES.length === 0) {
      throw new Error('No data');
    }

    return DB_MOVIES as Movie[];
  }

  public retrieveMovie(idx: number): Movie {
    const movie = DB_MOVIES.find(({ id }) => id === idx);

    if (!movie) {
      throw new Error('Movie not found');
    }

    return movie;
  }
}
