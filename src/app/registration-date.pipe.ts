import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'registrationDate',
  standalone: true,
})
export class RegistrationDatePipe implements PipeTransform {
  transform(value: Date): string {
    const yearsAgo =
      (Date.now() - new Date(value).getTime()) / (1000 * 60 * 60 * 24 * 365);

    switch (true) {
      case yearsAgo < 1:
        return '(Newbie)';
      case yearsAgo > 1 && yearsAgo < 3:
        return '(Veteran)';
      default:
        return '(OG)';
    }
  }
}
