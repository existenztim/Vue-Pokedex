import type { Ipokemon } from "./Ipokemon";
export interface IpokemonsResponse {
  count: number;
  next: string;
  previous: string | null;
  results: Ipokemon[];
}
