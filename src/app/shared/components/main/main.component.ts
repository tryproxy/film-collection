import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-main',
  imports: [RouterOutlet],
  template: `
    <div>
      <router-outlet />
    </div>
  `,
  styleUrl: './main.component.css',
})
export class MainComponent {}
