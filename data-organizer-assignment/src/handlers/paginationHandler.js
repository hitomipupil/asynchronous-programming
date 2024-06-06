import { state } from "../../data/state.js"
import { setData } from "../utils/setData.js";

export const paginationHandler = (event) => {
    if(event.target.id === 'next-button'){
        state.pagination.pageNumber += 1;
    }else{
        if(state.pagination.pageNumber === 1)return;
        state.pagination.pageNumber -= 1;
    }
    setData();
}