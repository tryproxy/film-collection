import type { PipeTransform } from '@angular/core';
import { Pipe } from '@angular/core';

@Pipe({
  name: 'humanReadableDurationTimeFormat',
  standalone: true,
})
export class HumanReadableDurationTimeFormatPipe implements PipeTransform {
  transform(minutes: number): string {
    const hours = Math.floor(minutes / 60);
    const minutesLeft = minutes % 60;

    if (minutesLeft === 0) {
      return `${hours}h`;
    }

    if (hours === 0) {
      return `${minutesLeft}min`;
    }

    return `${hours}h ${minutesLeft}min`;
  }
}
