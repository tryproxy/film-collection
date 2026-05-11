import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  template: `
    <footer class="footer">
      <p>2026 tryproxy</p>
      <a href="https://github.com/tryproxy/film-collection" target="_blank" rel="noreferrer">
        GitHub
      </a>
    </footer>
  `,
  styleUrl: './footer.component.css',
})
export class FooterComponent {}
