import { Component, computed, inject } from '@angular/core';
import { FilmsService } from '../../core/services/films.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { BREADCRUMBS, ROUTES } from '../../shared/config/routes';
import { BreadcrumbsService } from '../../core/services/breadcrumbs.service';
import { HumanReadableDurationTimeFormatPipe } from './human-readable-duration-time-format.pipe';

@Component({
  selector: 'app-film-details',
  imports: [RouterLink, HumanReadableDurationTimeFormatPipe],
  styleUrl: './film-details.component.css',
  template: `
    @if (movie(); as movie) {
      <section>
        <img [src]="movie.posterUrl" [alt]="movie.title" />
        <h1>{{ movie.title }}</h1>
        <p>Year: {{ movie.year }}</p>
        <p>Genre: {{ movie.genre }}</p>
        <p>Rating: {{ movie.rating }}</p>
        <p>Duration: {{ movie.duration | humanReadableDurationTimeFormat }}</p>
        <p>{{ movie.description }}</p>
        <div>
          <button type="button" (click)="toggleFavorite(movie.id)">Favorite:</button>
          {{ movie.isFavorite ? 'Yes' : 'No' }}
        </div>
      </section>

      <nav>
        <a [routerLink]="ROUTES.HOME.to">Go back</a>
      </nav>
    } @else {
      <p>Movie si not found.</p>
    }
  `,
})
export class FilmDetailsComponent {
  private readonly router = inject(ActivatedRoute);
  private readonly filmService = inject(FilmsService);
  private readonly breadcrumbsService = inject(BreadcrumbsService);

  public readonly ROUTES = ROUTES;

  public readonly movie = computed(() => {
    const id = Number(this.router.snapshot.paramMap.get('id'));

    if (Number.isNaN(id)) {
      return undefined;
    }

    return this.filmService.retrieveMovieById(id);
  });

  public constructor() {
    const movie = this.movie();

    if (!movie) {
      return;
    }

    this.breadcrumbsService.setBreadcrumbs(BREADCRUMBS.details(movie.id, movie.title));
  }

  public toggleFavorite(id: number) {
    this.filmService.toggleFavoriteMovieById(id);
  }
}
