export interface IpokemonResponse {
  //abilities: string[]; //add ability interface
  base_experience: number;
  height: number; // i dcm
  weight: number;
  id: number;
  //moves: string[]; //skillnad på abilites?
  name: string;
  sprites: {
    front_default: string;
    back_default: string;
  };

  stats: [
    {
      base_stat: number;
      stat: {
        name: string;
      };
    }
  ];
}
