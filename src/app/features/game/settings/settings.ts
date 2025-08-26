import { Component, OnInit } from '@angular/core';
import { ReturnButton } from '../../../shared/components/return-button/return-button';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ValidateButton } from '../../../shared/components/validate-button/validate-button';
import { PageType } from '../types/page-type.type';
import { NgClass } from '@angular/common';
import { DifficultiesType } from '../types/difficulties-type.type';

interface DifficultyInterface {
    label: string;
    value: DifficultiesType;
};

@Component({
  selector: 'app-settings',
  imports: [
    ReturnButton,
    ReactiveFormsModule,
    ValidateButton,
    NgClass
],
  templateUrl: './settings.html',
  styleUrl: './settings.scss'
})


export class Settings implements OnInit {
  page!: PageType;

  settingsForm!: FormGroup;

  difficulties: DifficultyInterface[] = [
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
    this.page = 'infos';

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

  onClickDisplayPage(pageName: PageType): void {
    this.page = pageName;
  }

  changingDifficulty(difficultyName: DifficultiesType): void {
    this.settingsForm.get('difficulty')?.setValue(difficultyName);
  }

}
