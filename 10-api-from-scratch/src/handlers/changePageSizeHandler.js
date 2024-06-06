import { state } from "../../data/state.js";
import { setData } from "../utils/setData.js";

export const changePageSizeHandler = (event) => {
const inputValue = document.getElementById('page-select').value;
state.pagination.pageSize = Number(inputValue);
setData();
}