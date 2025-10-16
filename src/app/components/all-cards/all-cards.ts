import { Component, inject } from '@angular/core';
import { PlayingCard } from '../playing-card/playing-card';
import { SearchBar } from '../search-bar/search-bar';
import { CommonModule } from '@angular/common';
import { FilterItemsPipe } from './pipe';
import { PokemonName } from '../../services/pokemon-name';
import { Pokemon } from '../../services/pokemon/pokemon';
import { Form } from '../form/form';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-cards',
  imports: [PlayingCard, SearchBar, CommonModule, FilterItemsPipe, Form],
  templateUrl: './all-cards.html',
  styleUrl: './all-cards.css'
})


export class AllCards {

  count = 0;
  search = '';
  pokemons: Pokemon[] = [];
  isAscending = true;

  showAddModal = false;

  private router = inject(Router);

  onCreated(p: Pokemon) {
    const created = this.pokemonName.add(p);
    if (created) this.pokemons.unshift(created);
    this.showAddModal = false;
    document.body.style.overflow = 'auto';
  }

  openAddModal() {
    this.showAddModal = true;
    document.body.style.overflow = 'hidden';
  }

  constructor(private pokemonName: PokemonName) {
    this.pokemons = this.pokemonName.getAll();
  }


  addPokemon() {

    const maxId = this.pokemons.length ? Math.max(...this.pokemons.map(p => p.id || 0)) : 0;
    const newId = maxId + 1;

    this.pokemons = this.pokemonName.getAll();
  }

  incrementCount() {
    this.count++;
  }

  toggleSortOrder() {
    this.isAscending = !this.isAscending;
    this.pokemons.sort((a, b) => this.isAscending ? a.id - b.id : b.id - a.id);
  }

  navigate(pokemon: Pokemon) {
    this.router.navigate(['/pokemon', pokemon.id]);
  }


}
