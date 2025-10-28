export interface Attack{
  name:string;
  strength:number;
  description:string;
  energyCount:number;
  energySecond:number;
}
export interface Pokemon {
  id: number;
  name: string;
  hp: number;
  figureCaption: string;
  attacks: Attack[];
  energyType: string;
  energySecond:string;
  img: string;
  milieu:string;
}


export const DEFAULT_POKEMONS: Pokemon[] = [];


export async function loadPokemonsFromJson(): Promise<Pokemon[]> {
  if (typeof window === 'undefined' || typeof fetch === 'undefined') {
    return DEFAULT_POKEMONS;
  }

  try {
    const res = await fetch('/api/pokemon.json');
    if (!res.ok) return DEFAULT_POKEMONS;
    const json = await res.json();
    const list = Array.isArray(json) ? json : (Array.isArray(json?.pokemons) ? json.pokemons : []);
    return list.length ? list : DEFAULT_POKEMONS;
  } catch (err) {
    console.error('[pokemon] loadPokemonsFromJson error', err);
    return DEFAULT_POKEMONS;
  }
}
