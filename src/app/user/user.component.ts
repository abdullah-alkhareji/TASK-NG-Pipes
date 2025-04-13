import { Component, Input } from '@angular/core';
import { User } from '../../data/users';
import { TitleCasePipe, DatePipe, CurrencyPipe } from '@angular/common';
import { TextColorPipe } from '../text-color.pipe';
import { LastLoginPipe } from '../last-login.pipe';
import { RegistrationDatePipe } from '../registration-date.pipe';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [
    TitleCasePipe,
    DatePipe,
    CurrencyPipe,
    TextColorPipe,
    LastLoginPipe,
    RegistrationDatePipe,
  ],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  @Input() data!: User;
}
