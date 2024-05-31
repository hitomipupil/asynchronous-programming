export const renderOutput = (outputsArray) => {
    const outputEl = document.getElementById('output');

    outputsArray.forEach((output) => {
    const row = document.createElement('div');
    row.classList= 'row';

        const outputTitleH3 = document.createElement('h3');
        const outputTitleA = document.createElement('a');
        outputTitleA.innerHTML = output.title;
        // outputTitleA.href = _;

        outputTitleH3.appendChild(outputTitleA);

        const outPutP = document.createElement('p');
        outPutP.innerHTML = output.snippet;

        const outputA = document.createElement('a');
        // outputA.href = _;

        const outputBtn = document.createElement('button');
        outputBtn.innerHTML = 'View Full Article';
        outputA.appendChild(outputBtn);

        row.appendChild(outputTitleH3);
        row.appendChild(outPutP);
        row.appendChild(outputA);

        outputEl.appendChild(row);
    });

    return outputEl;
};
