import { Location } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-return-button',
  imports: [],
  templateUrl: './return-button.html',
  styleUrl: './return-button.scss'
})
export class ReturnButton {

  constructor( private location: Location ) {}

  backToPreviousPage() {
    this.location.back();
  }
  
}
