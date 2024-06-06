import { state } from "../../data/state.js";
import { setData } from "../utils/setData.js";

export const filterHandler = () => {
const inputValue = document.getElementById('filter-input').value;
state.filter = inputValue;
setData();
}