import { BASE_URL } from '../config.js';
import { state } from '../../data/state.js'

export const stapiService = async () => {
const pageNumberQuery = `pageNumber=${state.pagination.pageNumber}`;
const pageSizeQuery = `&pageSize=${state.pagination.pageSize}`;
const sortQuery = `&sort=${state.sort.fieldname},${state.sort.type}`;


// https://stapi.co/api/v1/rest/character/search?pageNumber=5&pageSize=5&sort=gender,ASC

const url = BASE_URL + '/character/search?' + pageNumberQuery + pageSizeQuery + sortQuery;
const encodedUrI = encodeURI(url);

const response = await fetch(encodedUrI);

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  };
