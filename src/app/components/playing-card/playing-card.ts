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

  ngOnInit() {
  this.pokemon.attacks.forEach((attack: any) => {
    attack.energyIcons = this.getEnergyIcons(attack);
  });
}

  getEnergyIcons(attack: any): string[] {
  const icons: string[] = [];

  const mainCount = attack.energyCount || 0;
  const secondCount = attack.energySecond || 0;


  for (let i = 0; i < mainCount; i++) {
    icons.push(this.pokemon.energyType);
  }
  if (this.pokemon.energySecond) {
    for (let i = 0; i < secondCount; i++) {
      icons.push(this.pokemon.energySecond);
    }
  }
  console.log(icons)
  return icons;
}



}