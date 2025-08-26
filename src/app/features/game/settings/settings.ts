import { Component, OnInit } from '@angular/core';
import { ReturnButton } from '../../../shared/components/return-button/return-button';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ValidateButton } from '../../../shared/components/validate-button/validate-button';

@Component({
  selector: 'app-settings',
  imports: [
    ReturnButton,
    ReactiveFormsModule,
    ValidateButton
  ],
  templateUrl: './settings.html',
  styleUrl: './settings.scss'
})

export class Settings implements OnInit {

  settingsForm!: FormGroup;
  difficulties = [
    { label: "Facile", value: 'easy'},
    { label: "Moyen", value: 'medium'},
    { label: "Difficile", value: 'hard'},
  ];
  sounds = [
    { label: "Oui", value: true},
    { label: "Non", value: false}
  ];

  constructor( private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.settingsForm = this.formBuilder.group({
      name: [null],
      theme: [null],
      difficulty: ['medium'],
      sound: [true],
    })
  }

  onSubmitForm(): void {
    console.log(this.settingsForm.value);
  }

}
