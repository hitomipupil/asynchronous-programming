import { filterHandler } from "../handlers/filterHandler.js";

export const filterListener = (id='') => {
    document.getElementById(id).addEventListener('click', filterHandler);
}