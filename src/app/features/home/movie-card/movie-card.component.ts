import { Component, input } from '@angular/core';
import type { Movie } from '../../../shared/model/types';
import { NgOptimizedImage } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ROUTES } from '../../../shared/config/routes';

@Component({
  selector: 'app-movie-card',
  imports: [NgOptimizedImage, RouterLink],
  styleUrl: './movie-card.component.css',
  template: `
    <a [routerLink]="[ROUTES.DETAILS.to, movie().id]">
      <article>
        <h2>{{ movie().title }}</h2>
        <p>{{ movie().year }}</p>
        <p>{{ movie().genre }}</p>
        <p>{{ movie().rating }}</p>
        <img [ngSrc]="movie().posterUrl" alt="{{ movie().title }}" fill />
        <p>{{ movie().isFavorite }}</p>
      </article>
    </a>
  `,
})
export class MovieCardComponent {
  public readonly movie = input.required<Movie>();
  protected readonly ROUTES = ROUTES;
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
