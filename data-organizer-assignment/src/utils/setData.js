import { state } from "../../data/state.js";
import { stapiService } from "../api-calls/stapiService.js";
import { renderCharacterList } from "../components/renderCharacterList.js";

export const setData = async() => {
try{
const response = await stapiService();
const charactersArray = response.characters;

document.body.innerHTML = '';
    state.itemsToDisplay = [];

charactersArray.map((data)=>
state.itemsToDisplay.push({name: data.name}),
);

state.pagination.totalItems = response.page.totalElements;
state.pagination.totalPages = Math.ceil(
    state.pagination.totalItems / state.pagination.pageSize,
);

renderCharacterList();

}

catch(error){
    console.log('something went wrong', error);
    throw new Error(error.message)
}

}