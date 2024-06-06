
import { state } from "../../data/state.js";
import { changePageSizeHandler } from "../handlers/changePageSizeHandler.js";
import { paginationHandler } from "../handlers/paginationHandler.js";
import { filterListener } from "../listeners/filterListener.js";
import { sortListener } from "../listeners/sortListener.js";

export const renderPageBase = () => {
const container = document.createElement('div');

const h1 = document.createElement('h1');
h1.innerHTML = 'Harry Potter Characters List';

container.appendChild(h1);

const filterInput = document.createElement('input');
filterInput.id = 'filter-input';

const filterBtn = document.createElement('button');
filterBtn.type = 'button';
filterBtn.id = 'filter-button';
filterBtn.innerHTML = 'Filter!';

const sortBtn = document.createElement('button');
sortBtn.type = 'button';
sortBtn.id = 'sort-button';
sortBtn.innerHTML = 'Sort!';

container.appendChild(filterInput);
container.appendChild(filterBtn);
container.appendChild(sortBtn);

const displaySection = document.createElement('div');
const ulEl = document.createElement('ul');

state.itemsToDisplay.map((item)=> {
const liEl = document.createElement('li');
liEl.innerHTML = item.name;
ulEl.appendChild(liEl);
})

displaySection.appendChild(ulEl);

const paginatorSection = document.createElement('div');
const previousBtn = document.createElement('button');
previousBtn.type = 'button';
previousBtn.id = 'previous-button';
previousBtn.innerHTML = 'Prev';

const nextBtn = document.createElement('button');
nextBtn.type = 'button';
nextBtn.id = 'next-button';
nextBtn.innerHTML = 'Next';

previousBtn.addEventListener('click', paginationHandler);
nextBtn.addEventListener('click', paginationHandler);

const pageSelector = document.createElement('input');
pageSelector.id = 'page-select';
pageSelector.type = 'text';

const pageSelectBtn = document.createElement('button');
pageSelectBtn.type = 'button';
pageSelectBtn.innerHTML = 'Set Page Size';

pageSelectBtn.addEventListener('click', changePageSizeHandler)

paginatorSection.appendChild(previousBtn);
paginatorSection.appendChild(nextBtn);
paginatorSection.appendChild(pageSelector);
paginatorSection.appendChild(pageSelectBtn);

container.appendChild(paginatorSection);
container.appendChild(displaySection);

document.body.appendChild(container);

filterListener('filter-button');
sortListener('sort-button');
}