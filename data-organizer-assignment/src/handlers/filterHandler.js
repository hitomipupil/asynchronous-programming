import { state } from "../../data/state.js";

export const filterHandler = (event) => {
    const inputValue = document.getElementById('filter-input').value;
    console.log(inputValue);

    function filterItems(arr, query) {
        return arr.filter((el) => el.toLowerCase().includes(query.toLowerCase()));
      }

      console.log(filterItems(state.itemsToDisplay, inputValue));
}