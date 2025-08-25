import { Component, OnInit } from '@angular/core';
import { ReturnButton } from '../../../shared/components/return-button/return-button';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-settings',
  imports: [
    ReturnButton,
    ReactiveFormsModule
  ],
  templateUrl: './settings.html',
  styleUrl: './settings.scss'
})

export class Settings implements OnInit {

  settingsForm!: FormGroup;

  constructor( private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.settingsForm = this.formBuilder.group({
      name: [null],
      theme: [null],
      difficulty: [null],
      sound: [null],
    })
  }

  onSubmitForm(): void {
    console.log(this.settingsForm.value);
  }

}
