import type { Ipokemon } from "./Ipokemon";
export interface IpokemonResponse {
  abilities: Array<object>;
  id: number;
  main_region: {
    name: string;
    url: string;
  };
  moves: Array<{
    name: string;
    url: string;
  }>;
  name: string;
  names: Array<{
    language: {
      name: string;
      url: string;
    };
    name: string;
  }>;
  pokemon_species: Ipokemon[];

  types: Array<{
    name: string;
    url: string;
  }>;
  version_groups: Array<{
    name: string;
    url: string;
  }>;
}
