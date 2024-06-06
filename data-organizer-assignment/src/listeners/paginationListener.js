import { paginationHandler } from "../handlers/paginationHandler.js";

export const paginationListener = (id = '') => {
document.getElementById(id).addEventListener('click', paginationHandler);
}