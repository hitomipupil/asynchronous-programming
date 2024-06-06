import { state } from "../../data/state.js";
import { filterListener } from "../listeners/filterListener.js";
import { pageSelectListener } from "../listeners/pageSelectListener.js";
import { paginationListener } from "../listeners/paginationListener.js";
import { sortListener } from "../listeners/sortListener.js";

export const renderCharacterList = () => {
    const container = document.createElement('div');
    container.id = 'container';

    const h1 = document.createElement('h1');
    h1.innerHTML = 'Star Trek Characters List';

    
    const sortBtn = document.createElement('button');
    sortBtn.type = 'button';
    sortBtn.id = 'sort-button';
    sortBtn.innerHTML = 'Sort';

    const filterInput = document.createElement('input');
    filterInput.type = 'text';
    filterInput.id = 'filter-input';

    const filterBtn = document.createElement('button');
    filterBtn.type = 'button';
    filterBtn.id = 'filter-button';
    filterBtn.innerHTML = 'Filter';
    
    const paginatorSection = document.createElement('div');
    paginatorSection.id = 'paginatorSection';
    
    const previousBtn = document.createElement('button');
    previousBtn.type = 'button';
    previousBtn.id = 'previous-button';
    previousBtn.innerHTML = 'Prev';
    
    const nextBtn = document.createElement('button');
    nextBtn.type = 'button';
    nextBtn.id = 'next-button';
    nextBtn.innerHTML = 'Next';
    
    const pageSelectSection = document.createElement('div');
    pageSelectSection.id = 'pageSelectSection';
    
    const pageSelector = document.createElement('input');
    pageSelector.type ='number';
    pageSelector.id = 'page-select';
    pageSelector.min = 1;
    pageSelector.max = 20;
    
    const pageSelectBtn = document.createElement('button');
    pageSelectBtn.type = 'button';
    pageSelectBtn.id = 'page-select-button';
    pageSelectBtn.innerHTML = 'Set Page Size';

    const currentPage = document.createElement('div');
    currentPage.id = 'currentPage';
    currentPage.innerHTML = `Page ${state.pagination.pageNumber} of ${state.pagination.totalPages}`;
    
    paginatorSection.appendChild(previousBtn);
    paginatorSection.appendChild(nextBtn);
    paginatorSection.appendChild(currentPage);

    pageSelectSection.appendChild(pageSelector);
    pageSelectSection.appendChild(pageSelectBtn);


    const displaySection = document.createElement('div');
    displaySection.id = 'displaySection';
    const ulEl = document.createElement('ul');
    ulEl.id = 'charactersList';
    
    state.itemsToDisplay.map((item)=>{
        const liEl = document.createElement('li');
        liEl.classList = 'listItem';
    liEl.innerHTML = item.name;
    ulEl.appendChild(liEl);
    })
    
    displaySection.appendChild(ulEl);
    
    container.appendChild(h1);
    container.appendChild(sortBtn);
    container.appendChild(filterInput);
    container.appendChild(filterBtn);
    container.appendChild(displaySection);
    container.appendChild(pageSelectSection);
    container.appendChild(paginatorSection);
    
    document.body.appendChild(container);
    
    sortListener('sort-button');
    filterListener('filter-button');
    paginationListener('previous-button');
    paginationListener('next-button');
    pageSelectListener('page-select-button');
};
