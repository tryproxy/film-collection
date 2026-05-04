import { Component, computed, inject, signal } from '@angular/core';
import { FilmsService } from '../../core/services/films.service';
import type { Movie } from '../../shared/model/types';
import { MovieCardComponent } from './movie-card/movie-card.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  imports: [MovieCardComponent, FormsModule],
  styleUrl: './home.component.css',
  template: `
    <div>
      <div>
        <input
          type="text"
          [ngModel]="search()"
          (ngModelChange)="search.set($event)"
          placeholder="Search movies..."
        />
      </div>
      <div>
        @if (errorMoviesDb) {
          <div>{{ errorMoviesDb }}</div>
        } @else if (movies().length === 0) {
          <div>Nothing found</div>
        } @else {
          @for (movie of movies(); track movie.id) {
            <div>{{ movie.title }}</div>
            <app-movie-card [movie]="movie" />
          }
        }
      </div>
    </div>
  `,
})
export class HomeComponent {
  private readonly filmService = inject(FilmsService);
  public readonly search = signal('');

  public errorMoviesDb = '';
  public readonly movies = computed(() =>
    this.loadMovies().filter(({ title }) =>
      title.toLowerCase().includes(this.search().trim().toLowerCase()),
    ),
  );

  private loadMovies(): Movie[] {
    try {
      return this.filmService.listMovies();
    } catch (err) {
      this.errorMoviesDb = err instanceof Error ? err.message : 'Failed to list movies';

      return [];
    }
  }
}
