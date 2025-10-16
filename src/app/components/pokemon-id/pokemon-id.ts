import { CommonModule } from '@angular/common';
import { Component, inject, OnDestroy, OnInit, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { PlayingCard } from '../playing-card/playing-card';
import { PokemonName } from '../../services/pokemon-name';
import { Pokemon } from '../../services/pokemon/pokemon';


@Component({
  selector: 'app-pokemon-id',
  imports: [CommonModule, PlayingCard],
  templateUrl: './pokemon-id.html',
  styleUrl: './pokemon-id.css'
})
export class PokemonId implements OnInit, OnDestroy {

  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private pokemonService = inject(PokemonName);

  pokemon = signal<Pokemon | null>(null);
  routeSubscription: Subscription | null = null;

  ngOnInit(): void {
    this.routeSubscription = this.route.params.subscribe(params => {
      const id = params['id'] ? parseInt(params['id'], 10) : undefined;
      if (id) {
        const found = this.pokemonService.getById(id);
        this.pokemon.set(found ?? null);
      } else {
        this.pokemon.set(null);
      }
    });
  }

  ngOnDestroy(): void {
    this.routeSubscription?.unsubscribe();
  }

  next() {
    const current = this.pokemon();
    if (!current) return;

    const all = this.pokemonService.getAll().sort((a, b) => a.id - b.id);
    const index = all.findIndex(p => p.id === current.id);
    const nextPokemon = all[(index + 1) % all.length];
    this.router.navigate(['/pokemon', nextPokemon.id]);
  }

  back(){
    this.router.navigate(['']);
  }
}