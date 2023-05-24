// import type { IpokemonsResponse } from "@/models/IpokemonsResponse";
// import axios from "axios";

// export const getRegionData = async (region, pokemons) => {
//   try {
//     axios
//       .get<IpokemonsResponse>(`${region.url}limit=${region.limit}&offset=${region.offset}`)
//       .then((response) => {
//         pokemons.value = response.data.results;
//         console.log("response", response.data);
//       });
//   } catch (err) {
//     console.log(err);
//   }
// };
