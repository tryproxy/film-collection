import { Component, computed, inject, signal } from '@angular/core';
import { FilmsService } from '../../core/services/films.service';
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
        @if (error()) {
          <div>{{ error() }}</div>
        } @else if (movies().length === 0) {
          <div>Nothing found</div>
        } @else {
          @for (movie of movies(); track movie.id) {
            <ul>
              <li><app-movie-card [movie]="movie" /></li>
            </ul>
          }
        }
      </div>
    </div>
  `,
})
export class HomeComponent {
  private readonly filmService = inject(FilmsService);
  public readonly search = signal('');

  public error = this.filmService.error;

  public readonly movies = computed(() => {
    const query = this.search().trim().toLowerCase();

    return this.filmService.movies().filter(({ title }) => title.toLowerCase().includes(query));
  });
}
