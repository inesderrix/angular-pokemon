import { Component, Input } from '@angular/core';
import { Pokemon } from '../../services/pokemon/pokemon';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-playing-card',
  imports: [CommonModule],
  templateUrl: './playing-card.html',
  styleUrl: './playing-card.css'
})
export class PlayingCard {
  @Input() pokemon: Pokemon = {} as Pokemon;

  

  randomEnergy(): number[] {
    const n = Math.floor(Math.random() * 3) + 1; 
    return Array(n);
  }

}