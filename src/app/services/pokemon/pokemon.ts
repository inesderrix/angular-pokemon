// ...existing code...
export interface Pokemon {
  id: number;
  name: string;
  hp: number;
  figureCaption: string;
  attackName: string;
  attackStrength: number;
  attackDescription: string;
  attackName2: string;
  attackStrength2: number;
  attackDescription2: string;
  energyType: string;
  img: string;
}

// fallback statique (garde si fetch échoue)
export const DEFAULT_POKEMONS: Pokemon[] = [
  // ...existing objects (copie de ton tableau actuel)...
];

// charge le JSON public (/api/pokemon.json) — retourne DEFAULT_POKEMONS en SSR ou en cas d'erreur
export async function loadPokemonsFromJson(): Promise<Pokemon[]> {
  // Guard SSR / environnements sans fetch/localStorage
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
// ...existing code...