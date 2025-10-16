import pokemonData from '../public/api/pokemon.json';

interface Attack {
  name: string;
  strength: number;
  description: string;
  energyCount: number;
}

interface PokemonOriginal {
  id: number;
  name: string;
  hp: number;
  figureCaption: string;
  attackName?: string;
  attackStrength?: number;
  attackDescription?: string;
  attackName2?: string;
  attackStrength2?: number;
  attackDescription2?: string;
  attacks?: Attack[];
  energyType: string;
  img: string;
}

interface PokemonTransformed extends Omit<PokemonOriginal, 'attackName' | 'attackStrength' | 'attackDescription' | 'attackName2' | 'attackStrength2' | 'attackDescription2' | 'attacks'> {
  attacks: Attack[];
}

const data: { pokemons: PokemonOriginal[] } = pokemonData;

const transformedPokemons: PokemonTransformed[] = data.pokemons.map((p: PokemonOriginal) => {
  const attacks: Attack[] = [];

  if (p.attacks) {
    attacks.push(...p.attacks.map((a: Attack) => ({
      ...a,
      energyCount: Math.floor(Math.random() * 3) + 1
    })));
    return { ...p, attacks };
  }

  if (p.attackName) {
    attacks.push({
      name: p.attackName,
      strength: p.attackStrength || 0,
      description: p.attackDescription || '',
      energyCount: Math.floor(Math.random() * 3) + 1
    });
  }

  if (p.attackName2) {
    attacks.push({
      name: p.attackName2,
      strength: p.attackStrength2 || 0,
      description: p.attackDescription2 || '',
      energyCount: Math.floor(Math.random() * 3) + 1
    });
  }

  const { attackName, attackStrength, attackDescription, attackName2, attackStrength2, attackDescription2, ...rest } = p;

  return {
    ...rest,
    attacks
  };
});

console.log(transformedPokemons);
