import { Component } from '@angular/core';
import { PlayingCard } from '../playing-card/playing-card';
import { SearchBar } from '../search-bar/search-bar';
import { CommonModule } from '@angular/common';
import { Pokemon } from '../../services/pokemon/pokemon';
import { PokemonName } from '../../services/pokemon-name';


@Component({
  selector: 'app-table',
  imports: [CommonModule],
  templateUrl: './table.html',
  styleUrl: './table.css'
})
export class Table {

  search='';
  pokemons: Pokemon[]= [];

  constructor(private pokemonName: PokemonName) {
      this.pokemons = this.pokemonName.getAll();
    }
}
