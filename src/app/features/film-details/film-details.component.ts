import { Component, computed, inject } from '@angular/core';
import { FilmsService } from '../../core/services/films.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-film-details',
  imports: [],
  styleUrl: './film-details.component.css',
  template: `
    @if (movie(); as movie) {
      <section>
        <img [src]="movie.posterUrl" [alt]="movie.title" />
        <h1>{{ movie.title }}</h1>
        <p>Year: {{ movie.year }}</p>
        <p>Genre: {{ movie.genre }}</p>
        <p>Rating: {{ movie.rating }}</p>
        <p>Duration: {{ movie.duration }}</p>
        <p>{{ movie.description }}</p>
        <p>Favorite: {{ movie.isFavorite ? 'Yes' : 'No' }}</p>
      </section>
    } @else {
      <p>Movie si not found.</p>
    }
  `,
})
export class FilmDetailsComponent {
  private readonly router = inject(ActivatedRoute);
  private readonly filmService = inject(FilmsService);

  public readonly movie = computed(() => {
    const id = Number(this.router.snapshot.paramMap.get('id'));

    if (Number.isNaN(id)) {
      return undefined;
    }

    return this.filmService.retrieveMovieById(id);
  });
}

// id: number;
// title: string;
// year: number;
// genre: string;
// rating: number;
// duration: number;
// description: string;
// posterUrl: string;
// isFavorite: boolean;
