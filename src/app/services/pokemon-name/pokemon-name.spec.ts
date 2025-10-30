import { TestBed } from '@angular/core/testing';

import { PokemonName } from './pokemon-name';

describe('PokemonName', () => {
  let service: PokemonName;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PokemonName);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
