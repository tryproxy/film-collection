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
          <span>{{ movie().isFavorite ? 'Added' : 'Add' }}</span>
        </button>
      </div>
      <h2>{{ movie().title }}</h2>
      <p>{{ movie().year }}</p>
      <p>{{ movie().genre }}</p>
      <p>{{ movie().rating }}</p>
      <p>{{ movie().isFavorite }}</p>
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
