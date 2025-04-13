import { Pipe, PipeTransform } from '@angular/core';
import { UserStatus } from '../data/users';
@Pipe({
  name: 'textColor',
  standalone: true,
})
export class TextColorPipe implements PipeTransform {
  transform(value: UserStatus): string {
    switch (value) {
      case UserStatus.ACTIVE:
        return 'green';
      case UserStatus.INACTIVE:
        return 'orange';
      case UserStatus.BANNED:
        return 'red';
      default:
        return 'black';
    }
  }
}
