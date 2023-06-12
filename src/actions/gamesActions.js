import { popularGamesURL } from '../api';
import axios from 'axios';

// pošto koristimo thunk dodajemo još jednu funkciju u funkciji koja će biti asinhrona
export const loadGames = () => async (dispatch) => {
  const popularData = await axios.get(popularGamesURL);
  dispatch({
    type: 'FETCH_GAMES',
    payload: {
      popular: popularData
    }
  });
};
