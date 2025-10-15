import { Routes } from '@angular/router';
import { AllCards } from './components/all-cards/all-cards';
import { SearchBar } from './components/search-bar/search-bar';

export const routes: Routes = [
    {path: '', component: AllCards },
    {path: 'search-bar', component: SearchBar  }
];
