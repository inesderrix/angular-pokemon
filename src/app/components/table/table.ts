import { Component, inject } from '@angular/core';
import { SearchBar } from '../search-bar/search-bar';
import { CommonModule } from '@angular/common';
import { Pokemon } from '../../services/pokemon/pokemon';
import { PokemonName } from '../../services/pokemon-name';
import { Router } from '@angular/router';
import { FilterItemsPipe } from '../pipe';


@Component({
  selector: 'app-table',
  imports: [CommonModule, SearchBar, FilterItemsPipe],
  templateUrl: './table.html',
  styleUrl: './table.css'
})
export class Table {

  search = '';
  pokemons: Pokemon[] = [];

    private router = inject(Router);

  constructor(private pokemonName: PokemonName) {
    this.pokemons = this.pokemonName.getAll();
  }
  back() {
    this.router.navigate(['']);
  }
}
