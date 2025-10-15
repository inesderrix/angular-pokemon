import { Injectable } from '@angular/core';
import { pokemons as Pokemons } from './pokemon/pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonName {

  pokemons = Pokemons;


  constructor() {
    if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
      this.load();
           

    }
  }

  private save() {
    if (typeof window === 'undefined' || typeof localStorage === 'undefined') return;
    try { localStorage.setItem('pokemons', JSON.stringify(this.pokemons)); 
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
    return this.pokemons;
  }

  add(pokemon: any) {
    console.log('[PokemonName] add()');
    const maxId = this.pokemons.length ? Math.max(...this.pokemons.map(p => p.id || 0)) : 0;
    const newId = pokemon.id ?? (maxId + 1);
   const newPokemon = { ...pokemon, id: newId };
    this.pokemons.push(newPokemon);
    this.save();
    console.log('[PokemonName] added', newPokemon);
    return newPokemon;

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
