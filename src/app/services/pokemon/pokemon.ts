
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

export const pokemons: Pokemon[] = [
  {
    id: 7,
    name: 'Carapuce',
    hp: 70,
    figureCaption: 'N°007',
    attackName: "Pistolet à O",
    attackStrength: 10,
    attackDescription: "Lancez une boule d'eau sur votre adversaire.",
    attackName2: 'Éclaboussure',
    attackStrength2: 20,
    attackDescription2: '',
    energyType: 'water',
    img: 'pokemon/Carapuce.jpg'
  },
  {
    id: 1,
    name: 'Bulbizarre',
    hp: 80,
    figureCaption: 'N°001',
    attackName: 'Fouet Lianes',
    attackStrength: 20,
    attackDescription: 'Attachez votre adversaire avec des lianes.',
    attackName2: "Tranch'Herbe",
    attackStrength2: 30,
    attackDescription2: 'Attaque avec des feuilles tranchantes.',
    energyType: 'plante',
    img: 'pokemon/Bulbizarre.jpg'
  },
  {
    id: 4,
    name: 'Salamèche',
    hp: 60,
    figureCaption: 'N°004',
    attackName: 'Griffe',
    attackStrength: 30,
    attackDescription: "Griffe l'adversaire avec des griffes acérées.",
    attackName2: 'Flammèche',
    attackStrength2: 40,
    attackDescription2: "Lance une petite flamme sur l'adversaire.",
    energyType: 'fire',
    img: 'pokemon/Salameche.jpg'
  },
  {
    id: 25,
    name: 'Pikachu',
    hp: 100,
    figureCaption: 'N°025',
    attackName: 'Choc Électrique',
    attackStrength: 60,
    attackDescription: 'Un choc électrique puissant qui peut paralyser l’ennemi.',
    attackName2: 'Tonnerre',
    attackStrength2: 90,
    attackDescription2: '',
    energyType: 'electricite',
    img: 'pokemon/Pikachu.jpg'
  },
  {
    id: 150,
    name: 'Mewtwo',
    hp: 300,
    figureCaption: 'N°150',
    attackName: 'Psyko',
    attackStrength: 120,
    attackDescription: 'Utilise des pouvoirs psychiques pour infliger des dégâts massifs.',
    attackName2: 'Frappe Psy',
    attackStrength2: 130,
    attackDescription2: 'Projette une énergie mentale destructrice.',
    energyType: 'psy',
    img: 'pokemon/Mewtwo.jpg'
  },
  {
    id: 35,
    name: 'Mélofée',
    hp: 120,
    figureCaption: 'N°035',
    attackName: 'Pouvoir Lunaire',
    attackStrength: 85,
    attackDescription: 'Libère l’énergie de la lune pour affaiblir l’ennemi.',
    attackName2: 'Métronome',
    attackStrength2: 0,
    attackDescription2: 'Utilise une attaque aléatoire parmi toutes celles existantes.',
    energyType: 'fee',
    img: 'pokemon/Melofee.jpg'
  }, {
    id: 147,
    name: 'Minidraco',
    hp: 110,
    figureCaption: 'N°147',
    attackName: 'Draco-Rage',
    attackStrength: 60,
    attackDescription: 'Lance une vague d’énergie draconique sur l’adversaire.',
    attackName2: 'Enroulement',
    attackStrength2: 0,
    attackDescription2: 'Augmente son attaque et sa défense en s’enroulant sur lui-même.',
    energyType: 'dragon',
    img: 'pokemon/Minidraco.jpg'
  },
  {
    id: 52,
    name: 'Miaouss',
    hp: 90,
    figureCaption: 'N°052',
    attackName: 'Combo-Griffe',
    attackStrength: 40,
    attackDescription: 'Griffe l’ennemi plusieurs fois d’affilée.',
    attackName2: 'Jackpot',
    attackStrength2: 0,
    attackDescription2: 'Lance des pièces sur l’adversaire — plus le combat dure, plus il rapporte.',
    energyType: 'normal',
    img: 'pokemon/Miaouss.jpg',
  }
];