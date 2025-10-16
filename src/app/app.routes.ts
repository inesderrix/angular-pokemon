import { Routes } from '@angular/router';
import { AllCards } from './components/all-cards/all-cards';
import { SearchBar } from './components/search-bar/search-bar';
import { NotFound } from './components/not-found/not-found';
import { PokemonId } from './components/pokemon-id/pokemon-id';

export const routes: Routes = [
    { path: '', component: AllCards },
    { path: 'search-bar', component: SearchBar },
    {
        path: 'pokemon',
        children: [
            {
                path: '', component: PokemonId
            },
            {
                path: ':id', component: PokemonId
            }
        ]
    },
    { path: '**', component: NotFound }
];
