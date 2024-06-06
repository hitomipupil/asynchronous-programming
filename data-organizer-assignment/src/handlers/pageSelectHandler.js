import { state } from "../../data/state.js";
import { setData } from "../utils/setData.js";

export const pageSelectHandler = (event) => {
const inputValue = document.getElementById('page-select').value;
const pageSize = Number(inputValue);

if(!isNaN(pageSize)){
state.pagination.pageSize = inputValue;
} else {
    console.log('this is not a number');
}
setData();
}