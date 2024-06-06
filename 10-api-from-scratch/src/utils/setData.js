import { state } from "../../data/state.js";
import { apiService } from "../../api-calls/apiService.js";
import { renderPageBase } from "../components/renderPageBase.js";

export const setData = async ()=> {
    try{
    const response = await apiService();
    
    document.body.innerHTML = '';
    state.itemsToDisplay = [];
    
    response.data.map((data) =>
    state.itemsToDisplay.push({name: data.attributes.name}),
    );

    state.pagination.totalItems = response.meta.pagination.records;
    state.pagination.totalPages = Math.ceil(
        state.pagination.totalItems / state.pagination.pageSize,
    );
    renderPageBase();
    

    }
    catch(error){
    console.log('something went wrong', error);
    throw new Error(error.message)
    }
    }
    