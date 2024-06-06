export const renderUser = (user, todoArray) => {
const container = document.createElement('div');
container.id = `user-${user.id}`;

const userName = document.createElement('h1');
userName.innerHTML = user.username;

const todoName = document.createElement('p');
todoName.innerHTML = `name: ${user.name}`;

const emailEl = document.createElement('p');
emailEl.innerHTML = `email: ${user.email}`;

const websiteContainer = document.createElement('p');
websiteContainer.innerHTML = 'website: ';

const websiteEl = document.createElement('a');
websiteEl.innerHTML = user.website;
websiteEl.href = user.website;

websiteContainer.appendChild(websiteEl);

container.appendChild(userName);
container.appendChild(todoName);
container.appendChild(emailEl);
container.appendChild(websiteContainer);

todoArray.forEach((comment)=>{
const todoContainer = document.createElement('div');
todoContainer.id = `todo-${comment.id}`;
todoContainer.classList = 'todo';

const todoInput = document.createElement('input');
todoInput.type = 'checkbox';

const todoCode = document.createElement('code');
todoCode.innerHTML = comment.title;

todoContainer.appendChild(todoInput);
todoContainer.appendChild(todoCode);

container.appendChild(todoContainer);
});

return container;
}