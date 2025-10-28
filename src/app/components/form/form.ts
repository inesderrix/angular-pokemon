import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Pokemon } from '../../services/pokemon/pokemon';
import { PokemonName } from '../../services/pokemon-name';


@Component({
  selector: 'app-form',
  imports: [CommonModule, FormsModule],
  templateUrl: './form.html',
  styleUrl: './form.css'
})
export class Form {
  @Output() create = new EventEmitter<Pokemon>();
  @Output() cancel = new EventEmitter<void>();

  model: Partial<Pokemon> = {
    id: 0,
    name: '',
    hp: 0,
    attacks: [
      { name: '', strength: 0, description: '', energyCount: 1, energySecond: 1 }
    ],
    energyType: 'normal',
  };

  addAttack() {
    this.model.attacks?.push({ name: '', strength: 0, description: '', energyCount: 1, energySecond: 1 });
  }

  energyTypes = [
    { value: 'normal', label: 'Normal' },
    { value: 'plante', label: 'Plante' },
    { value: 'fire', label: 'Feu' },
    { value: 'water', label: 'Eau' },
    { value: 'electricite', label: 'Électricité' },
    { value: 'psy', label: 'Psy' },
    { value: 'fee', label: 'Fée' },
    { value: 'dragon', label: 'Dragon' },
    { value: 'combat', label: 'Combat' },
    { value: 'obscure', label: 'Obscurité' },
    { value: 'metal', label: 'Métal' }
  ];


  constructor(private pokemonService: PokemonName) { }

  submit(formValid: boolean) {
    if (!formValid || !this.model.name) return;
    this.create.emit(this.model as Pokemon);
    this.reset();
  }

  close() {
    this.cancel.emit();
    this.reset();
  }

  reset() {
    this.model = {
      id: 0,
      name: '',
      hp: 50,
      attacks: [
        { name: '', strength: 0, description: '', energyCount: 0, energySecond: 0 },
        { name: '', strength: 0, description: '', energyCount: 0, energySecond: 0 }
      ],
      energyType: 'normal'
    };
  }

}
