import type { Ipokemon } from '@/models/Ipokemon';
import type { IpokemonsResponse } from '@/models/IpokemonsResponse';
import type { IpokemonResponse } from '@/models/IpokemonResponse';
import axios from 'axios';

export const getPokemonData = async (query: string): Promise<IpokemonResponse> => {
  let response = await axios.get<IpokemonResponse>(query);
  return response.data;
};

export const initGetRegionData = async (query: string): Promise<Ipokemon[]> => {
  let response = await axios.get<IpokemonsResponse>(query);
  return response.data.results;
};
