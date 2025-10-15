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
    name: '',
    hp: 0,
    attackName: '',
    attackStrength: 0,
    attackDescription: '',
    attackName2: '',
    attackStrength2: 0,
    attackDescription2: '',
    energyType: 'normal',
    img: ''
  };

  
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
    const list = this.pokemonService.getAll();
    const maxId = list.length ? Math.max(...list.map(p => p.id || 0)) : 0;
    const newId = maxId + 1;

    const newPokemon: Pokemon = {
      id: newId,
      name: this.model.name || `Pokemon ${newId}`,
      hp: this.model.hp ?? 50,
      figureCaption: `N°${newId.toString().padStart(3, '0')}`,
      attackName: this.model.attackName || '',
      attackStrength: this.model.attackStrength ?? 0,
      attackDescription: this.model.attackDescription || '',
      attackName2: this.model.attackName2 || '',
      attackStrength2: this.model.attackStrength2 ?? 0,
      attackDescription2: this.model.attackDescription2 || '',
      energyType: this.model.energyType || 'fire',
      img: this.model.img || 'Pikachu.jpg'
    };
    this.create.emit(newPokemon);
    this.reset();
  }

  close() {
    this.cancel.emit();
    this.reset();
  }

  reset() {
    this.model = {
      name: '',
      hp: 50,
      attackName: '',
      attackStrength: 0,
      attackDescription: '',
      attackName2: '',
      attackStrength2: 0,
      attackDescription2: '',
      energyType: 'normal',
      img: ''
    };
  }

}
