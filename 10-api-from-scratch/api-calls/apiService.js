import { BASE_URL } from "../config.js";
import { state } from "../data/state.js";

export const apiService = async() => {

    
    const filterQuery = `filter[name_cont]=${state.filter}`;
    const sortQuery = `&sort=${state.sort.type}${state.sort.field}`;
    const pageQuery = `&page[size]=${state.pagination.pageSize}&page[number]=${state.pagination.currentPage}`;

// https://api.potterdb.com/v1/characters?sort=name&page[size]=2%20page[number]=2

const url = BASE_URL + "characters?" + filterQuery + sortQuery + pageQuery;

const encodedUrI = encodeURI(url)

const response = await fetch(encodedUrI)

if(!response.ok){
    console.log(response.statusText);
    throw new Error(response.statusText);
}
const parsedResponse = await response.json();

return parsedResponse;
};