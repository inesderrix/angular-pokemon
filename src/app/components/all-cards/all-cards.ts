import { Component } from '@angular/core';
import { PlayingCard } from '../playing-card/playing-card';
import { SearchBar } from '../search-bar/search-bar';
import { CommonModule } from '@angular/common';
import { FilterItemsPipe } from './pipe';
import { PokemonName } from '../../services/pokemon-name';
import { Pokemon } from '../../services/pokemon/pokemon';
import { Form } from '../form/form';

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
  isAscending = false;

  showAddModal = false;

  onCreated(p: Pokemon) {
   const created = this.pokemonName.add(p);
   if (created) this.pokemons.unshift(created);
    this.showAddModal = false;
  }

  openAddModal() {
    this.showAddModal = true;
  }

  constructor(private pokemonName: PokemonName) {
    this.pokemons = this.pokemonName.getAll();
  }


  addPokemon() {

    const maxId = this.pokemons.length ? Math.max(...this.pokemons.map(p => p.id || 0)) : 0;
    const newId = maxId + 1;

    const generPokemon: Pokemon = {
      id: newId,
      name: 'Pikachu',
      hp: 50,
      figureCaption: `N°${newId.toString().padStart(3, '0')}`,
      attackName: '',
      attackStrength: 0,
      attackDescription: '',
      attackName2: '',
      attackStrength2: 0,
      attackDescription2: '',
      energyType: 'normal',
      img: 'Pikachu.jpg'
    };
    this.pokemonName.add(generPokemon);
    this.pokemons = this.pokemonName.getAll();
  }

  incrementCount() {
    this.count++;
  }

  toggleSortOrder() {
    this.isAscending = !this.isAscending;
    this.pokemons.sort((a, b) => this.isAscending ? a.id - b.id : b.id - a.id);
  }



}
