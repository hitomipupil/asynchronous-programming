import { BASE_URL } from "../config.js";

export const githubService = async(searchValue='') => {

const response = await fetch(url);

if(!response.ok){
    console.log(response.statusText);
    throw new Error(response.statusText);
}

// if(response.query===undefined){
//     console.log(response);
//     throw new Error(response);
// }

const parsedResponse = await response.json();

// fetch(url)
//     .then(function(response){return response.json();})
//     .then(function(response) {
//         var pages = response.query.pages;
//         for (var p in pages) {
//             console.log(pages[p].title + " has " + pages[p].length + " bytes.");
//         }
//     })
//     .catch(function(error){console.log(error);});

// console.log('response', parsedResponse.query.search);
return parsedResponse;
};