import { Directive, ElementRef, inject } from '@angular/core';

@Directive({
  selector: '[appAutoFocus]',
  standalone: true,
})
export class AutoFocusDirective {
  private ref = inject(ElementRef);

  constructor() {
    setTimeout(() => {
      this.ref.nativeElement.focus();
    }, 0);
  }
}
