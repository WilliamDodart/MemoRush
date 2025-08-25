import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { ReturnButton } from '../../../shared/components/return-button/return-button';
import { ValidateButton } from '../../../shared/components/validate-button/validate-button';

@Component({
  selector: 'app-register',
  imports: [
    FormsModule,
    ReturnButton,
    ValidateButton
  ],
  templateUrl: './register.html',
  styleUrl: './register.scss'
})
export class Register {

  userName!: string;
  password!: string;
  validatePassword!: string;

  onSubmitForm(registerForm: NgForm): void {
    console.log(registerForm.value);
  }
}
