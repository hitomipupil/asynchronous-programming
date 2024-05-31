import { BASE_URL } from '../config.js';

export const stapiService = async (userInput) => {
    try {
      const response = await fetch(`${BASE_URL}/character/search?name=${encodeURIComponent(userInput)}`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
       const charactersArray = data.characters;
       return charactersArray;

    } catch (error) {
      console.error('Error fetching character info:', error);
      throw error;
    }
  };
