import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'lastLogin',
  standalone: true,
})
export class LastLoginPipe implements PipeTransform {
  transform(lastLogin: Date): string {
    const daysAgo =
      (Date.now() - new Date(lastLogin).getTime()) / (1000 * 60 * 60 * 24);

    switch (true) {
      case daysAgo < 7:
        return '🔥';
      case daysAgo < 30:
        return '💤';
      case daysAgo < 90:
        return '🦥';
      default:
        return '👻';
    }
  }
}
