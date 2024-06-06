import { sortHandler } from "../handlers/sortHandler.js";

export const sortListener = (id='') => {
    document.getElementById(id).addEventListener('click', sortHandler);
}