import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  imports: [],
  templateUrl: './homepage.html',
  styleUrl: './homepage.scss'
})
export class Homepage {

  constructor( private router: Router ) {}

  navigateOnClick(url: string): void {
    this.router.navigateByUrl(url);
  }

}
