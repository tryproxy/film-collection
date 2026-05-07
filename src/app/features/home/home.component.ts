import { Component, computed, inject, signal } from '@angular/core';
import { FilmsService } from '../../core/services/films.service';
import { MovieCardComponent } from './movie-card/movie-card.component';
import { FormsModule } from '@angular/forms';
import { BreadcrumbsService } from '../../core/services/breadcrumbs.service';
import { BREADCRUMBS } from '../../shared/config/routes';
import { AutoFocusDirective } from './auto-focus.directive';

@Component({
  selector: 'app-home',
  imports: [MovieCardComponent, FormsModule, AutoFocusDirective],
  styleUrl: './home.component.css',
  template: `
    <div>
      <div>
        <input
          appAutoFocus
          type="text"
          [ngModel]="search()"
          (ngModelChange)="search.set($event)"
          placeholder="Search movies..."
        />
      </div>
      <div>
        @if (error()) {
          <div>{{ error() }}</div>
        } @else if (filteredMovies().length === 0) {
          <div>Nothing found</div>
        } @else {
          <ul>
            @for (movie of filteredMovies(); track movie.id) {
              <li>
                <app-movie-card [movie]="movie" (toggleFavorite)="toggleFavorite($event)" />
              </li>
            }
          </ul>
        }
      </div>
    </div>
  `,
})
export class HomeComponent {
  private readonly filmService = inject(FilmsService);
  private readonly breadcrumbsService = inject(BreadcrumbsService);

  public readonly search = signal('');
  public readonly error = this.filmService.error;

  public readonly filteredMovies = computed(() => {
    const query = this.search().trim().toLowerCase();

    return this.filmService.movies().filter(({ title }) => title.toLowerCase().includes(query));
  });

  public constructor() {
    this.breadcrumbsService.setBreadcrumbs(BREADCRUMBS.home());
  }

  public toggleFavorite(id: number) {
    this.filmService.toggleFavoriteMovieById(id);
  }
}
