import { Component, Input } from '@angular/core';
import { Pokemon } from '../../services/pokemon/pokemon';

@Component({
  selector: 'app-playing-card',
  imports: [],
  templateUrl: './playing-card.html',
  styleUrl: './playing-card.css'
})
export class PlayingCard {
  @Input() pokemon: Pokemon = {} as Pokemon;

}