import { apiService } from "../api-calls/apiService.js";
import { renderUser } from "../components/renderUser.js";

export const userInputHandler = async (event) => {
const userId = event.target.form.userId.value;
// console.log(userId);

const root = document.getElementById('root');
root.innerHTML = '';

try {
    console.log('try block');
    const userPromise = apiService('users', userId);
    const todoPromise = apiService('users', userId, 'todos');

    const [user, todoArray] = await Promise.all([
        userPromise,
        todoPromise,
    ]);

    // state.post = post;
    // state.comments = comments;
    // console.log(state);

    const userElement = renderUser(user, todoArray);
    root.appendChild(userElement);

}
catch(err) {
    console.error(err);
}

};