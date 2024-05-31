export const renderCharacterList = (charactersArray) => {

    const container = document.getElementById('container');
    const characterList = document.createElement('ul');
    characterList.id = 'characterList';

    charactersArray.forEach((character) => {
    const listItem = document.createElement('li');

    const characterName = document.createElement('div')
    characterName.innerHTML = character.name;
    characterName.classList = 'characterName';

    // const characterId = document.createElement('div');
    // characterId.innerHTML = `ID: ${character.uid}`;
    // characterId.classList = 'characterId';

    // listItem.appendChild(characterId);
    listItem.appendChild(characterName);

    characterList.appendChild(listItem)
    container.appendChild(characterList);
    })
return container;
};
