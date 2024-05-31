import { apiService } from "../api-calls/apiService.js";
import { state } from "../api-calls/data/state.js"
import { renderPost } from "../components/renderPost.js";

export const userInputHandler = async (event) => {
const postId = event.target.form.postId.value;
// console.log(postId);

    const root = document.getElementById('root');
    root.innerHTML = '';

    try {
        console.log('try block');
        const postPromise = apiService('posts', postId);
        const commentsPromise = apiService('posts', postId, 'comments');

        const [post, commentsArray] = await Promise.all([
            postPromise,
            commentsPromise,
        ]);

        // state.post = post;
        // state.comments = comments;
        // console.log(state);

        const postElement = renderPost(post, commentsArray);
        root.appendChild(postElement);

    } catch (err) {
        console.error(err);
    }
};
