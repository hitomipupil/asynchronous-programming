import { pageSelectHandler } from "../handlers/pageSelectHandler.js"

export const pageSelectListener = (id) => {
    document.getElementById(id).addEventListener('click', pageSelectHandler)
}