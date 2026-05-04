import { Component, inject } from '@angular/core';
import { FilmsService } from '../../core/services/films.service';
import type { Movie } from '../../shared/model/types';
import { MovieCardComponent } from './movie-card/movie-card.component';

@Component({
  selector: 'app-home',
  imports: [MovieCardComponent],
  styleUrl: './home.component.css',
  template: `
    <div>
      @if (!errorMovies) {
        @for (movie of movies; track movie.id) {
          <div>{{ movie.title }}</div>
          <app-movie-card [movie]="movie" />
        }
      } @else {
        <div>{{ errorMovies }}</div>
      }
    </div>
  `,
})
export class HomeComponent {
  private readonly filmService = inject(FilmsService);

  public errorMovies = '';
  public readonly movies = this.loadMovies();

  private loadMovies(): Movie[] {
    try {
      return this.filmService.listMovies();
    } catch (err) {
      this.errorMovies = err instanceof Error ? err.message : 'Failed to list movies';

      return [];
    }
  }
}
