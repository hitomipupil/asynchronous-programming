import { wikiService } from "../api-calls/wikiService.js";
import { renderOutput } from "../components/renderOutput.js";

export const userInputHandler = async (event) => {
const inputValue = event.target.parentElement.children[0].value;

try {
console.log('try block');
const output = document.getElementById('output');
output.innerHTML = '';

 const outputsArray = await wikiService(inputValue);
 renderOutput(outputsArray);

 // output.appendChild(outputsEl);
}

catch(err) {
    console.error(err);
}

};