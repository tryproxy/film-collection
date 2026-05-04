import { Component, input } from '@angular/core';
import type { Movie } from '../../../shared/model/types';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-movie-card',
  imports: [NgOptimizedImage],
  styleUrl: './movie-card.component.css',
  template: `
    <article>
      <h2>{{ movie().title }}</h2>
      <p>{{ movie().year }}</p>
      <p>{{ movie().genre }}</p>
      <p>{{ movie().rating }}</p>
      <img [ngSrc]="movie().posterUrl" alt="{{ movie().title }}" fill />
      <p>{{ movie().isFavorite }}</p>
    </article>
  `,
})
export class MovieCardComponent {
  public readonly movie = input.required<Movie>();
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
