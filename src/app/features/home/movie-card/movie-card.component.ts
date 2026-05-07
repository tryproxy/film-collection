import { Component, inject, input, output } from '@angular/core';
import type { Movie } from '../../../shared/model/types';
import { NgOptimizedImage } from '@angular/common';
import { ROUTES } from '../../../shared/config/routes';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie-card',
  imports: [NgOptimizedImage],
  styleUrl: './movie-card.component.css',
  template: `
    <article class="movie-card">
      <div class="movie-card__poster">
        <img [ngSrc]="movie().posterUrl" [alt]="movie().title" fill />
        <button
          class="movie-card__favorite"
          type="button"
          data-card-action
          [attr.aria-pressed]="movie().isFavorite"
          (click)="onFavoriteClick($event)"
        >
          {{ movie().isFavorite ? 'Added' : 'Add' }}
        </button>
      </div>
      <div class="movie-card__content">
        <h2 class="movie-card__title">{{ movie().title }}</h2>
        <div class="movie-card__meta">
          <p>
            <span>Year</span><span>{{ movie().year }}</span>
          </p>
          <p>
            <span>Genre</span><span>{{ movie().genre }}</span>
          </p>
          <p>
            <span>Rating</span><span>{{ movie().rating }}</span>
          </p>
          <p>
            <span>Favorite</span><span>{{ movie().isFavorite ? 'Yes' : 'No' }}</span>
          </p>
        </div>
        <div class="movie-card__actions">
          <a
            data-card-action
            [href]="movie().imdbUrl"
            target="_blank"
            rel="noopener noreferrer"
            (click)="$event.stopPropagation()"
          >
            IMDB
          </a>
          <a
            data-card-action
            [href]="movie().watchUrl"
            target="_blank"
            rel="noopener noreferrer"
            (click)="$event.stopPropagation()"
          >
            Watch
          </a>
        </div>
      </div>
    </article>
  `,
  host: {
    '(click)': 'openMovieDetails()',
  },
})
export class MovieCardComponent {
  private readonly router = inject(Router);

  public readonly movie = input.required<Movie>();
  public readonly toggleFavorite = output<number>();

  public readonly ROUTES = ROUTES;

  public onFavoriteClick(event: MouseEvent): void {
    event.stopPropagation();
    this.toggleFavorite.emit(this.movie().id);
  }

  public openMovieDetails(): void {
    void this.router.navigate([this.ROUTES.DETAILS.to, this.movie().id]);
  }
}
