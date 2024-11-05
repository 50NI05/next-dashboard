import { SimplePokemon } from '@/pokemons';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface PokemonsState {
  favorites: {[key: string]: SimplePokemon}
}

const getInitialState = (): PokemonsState => {
  // if (typeof localStorage === 'undefined') {
  //   return {}
  // }

  const favorite = JSON.parse(localStorage.getItem('favorite-pokemons') ?? '{}')

  return favorite
}

const initialState: PokemonsState = {
  favorites: {}
  // ...getInitialState()
  // '1': { id: '1', name: 'bulbasaur' },
  // '3': { id: '3', name: 'bulbasaur' },
}

const pokemonsSlice = createSlice({
  name: 'pokemons',
  initialState,
  reducers: {
    setFavoritePokemons(state, action: PayloadAction<{ [key: string]: SimplePokemon }>) {
      state.favorites = action.payload
    },

    toogleFavorite(state, action: PayloadAction<SimplePokemon>) {
      const pokemon = action.payload;
      const { id } = pokemon;

      // Verifica si el Pokémon ya está en favoritos
      if (state.favorites[id]) {
        delete state.favorites[id];
      } else {
        state.favorites[id] = pokemon;
      }

      localStorage.setItem('favorite-pokemons', JSON.stringify(state.favorites));
    },
  }
});

export const { toogleFavorite, setFavoritePokemons } = pokemonsSlice.actions

export default pokemonsSlice.reducer