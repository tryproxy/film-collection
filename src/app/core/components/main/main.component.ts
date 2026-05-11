import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-main',
  imports: [RouterOutlet],
  template: ` <router-outlet /> `,
  styleUrl: './main.component.css',
})
export class MainComponent {}
