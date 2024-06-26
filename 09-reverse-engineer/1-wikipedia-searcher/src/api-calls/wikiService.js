import { BASE_URL } from "../config.js";

export const wikiService = async(searchValue='') => {


var params = {
    action: "query",
    list: "search",
    format: "json",
    srsearch: searchValue,
    srlimit: '5',
    prop: "info",
    inprop: "url",
    utf8: "",
    origin: "*",
};

let url = BASE_URL + "?";

Object.keys(params).forEach((key)=>{
    url += "&" + key + "=" + params[key];
});

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
const responseArray = parsedResponse.query.search;
return responseArray;
};