import { Routes } from '@angular/router';
import { Homepage } from './features/homepage/homepage';
import { Register } from './features/authentification/register/register';

export const routes: Routes = [
    { path: '', component: Homepage },
    { path: 'inscription', component: Register}
];
