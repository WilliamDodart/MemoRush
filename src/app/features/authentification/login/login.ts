import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { ReturnButton } from '../../../shared/components/return-button/return-button';
import { ValidateButton } from '../../../shared/components/validate-button/validate-button';

@Component({
  selector: 'app-login',
  imports: [
    FormsModule,
    ReturnButton,
    ValidateButton
  ],
  templateUrl: './login.html',
  styleUrl: './login.scss'
})

export class Login {

  userName!: string;
  password!: string;

  onSubmitForm(loginForm: NgForm): void {
    console.log(loginForm.value)
  }

}
