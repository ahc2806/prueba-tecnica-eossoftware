import { API_KEY, API_URL } from '@env';
import axios from 'axios';

export const getNewsMovies = async () => {
  try {
    const response = await axios.get(
      `${API_URL}movie/now_playing?api_key=${API_KEY}`,
    );
    return response.data;
  } catch (error) {
    if (error.response) {
      return error.response.data;
    }

    return error;
  }
};
