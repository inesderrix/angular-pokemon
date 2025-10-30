import { Injectable } from '@angular/core';
import { DEFAULT_POKEMONS, loadPokemonsFromJson, Pokemon } from '../pokemon/pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonName {


  pokemons: Pokemon[] = DEFAULT_POKEMONS;

  constructor() {
    this.init();
  }

  private async init() {
    this.load();

    if (!this.pokemons || this.pokemons.length === 0) {
      const list = await loadPokemonsFromJson();
      if (list && list.length) {
        this.pokemons = list;
        this.save();
      }
    }
  }

  private save() {
    if (typeof window === 'undefined' || typeof localStorage === 'undefined') return;
    try {
      localStorage.setItem('pokemons', JSON.stringify(this.pokemons));
      console.log("je suis dans le save")
      console.log(localStorage.getItem('pokemons'))
    } catch { }

  }

  private load() {
    if (typeof window === 'undefined' || typeof localStorage === 'undefined') return;
    try {
      console.log(localStorage.getItem('pokemons'))
      const data = localStorage.getItem('pokemons');
      if (data) this.pokemons = JSON.parse(data).map((p: any) => ({ ...p }));
    } catch { }
  }


  getAll() {
    console.log("je suis dans le getAll")
    this.load();
    return [...this.pokemons];
  }

  add(pokemon: any) {
    console.log('[PokemonName] add()');
    const maxId = this.pokemons.length ? Math.max(...this.pokemons.map(p => p.id || 0)) : 0;
    const newId = pokemon.id ?? (maxId + 1);

    const formattedId = `N°${newId.toString().padStart(3, '0')}`;

    const newPokemon = { ...pokemon, id: newId , figureCaption:formattedId};
    this.pokemons.push(newPokemon);
    this.save();
    console.log('[PokemonName] added', newPokemon);
    return newPokemon;

  }

  getById(id: number): Pokemon | undefined {
    this.load();
    return this.pokemons.find(p => p.id === id)

  }

  updatePokemon(id: number, updatedPokemon: any) {
    const index = this.pokemons.findIndex(p => p.id === id);
    if (index !== -1) {
      this.pokemons[index] = { ...this.pokemons[index], ...updatedPokemon };
    }
    this.save();
  }

  deletePokemon(id: number) {
    this.pokemons = this.pokemons.filter(p => p.id !== id);
    this.save();
  }

}
