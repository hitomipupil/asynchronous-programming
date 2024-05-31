export const renderPost = (post, commentsArray) => {
    const container = document.createElement('div');
    container.id = `post-${post.id}`;

    const titleEl = document.createElement('h1');
    titleEl.innerHTML = post.title;
    container.appendChild(titleEl);

    const idEl = document.createElement('code');
    idEl.innerHTML = 'posted by user: ' + post.id;
    container.appendChild(idEl);

    const bodyEl = document.createElement('p');
    bodyEl.innerHTML = post.body;
    container.appendChild(bodyEl);

    const commentsContainer = document.createElement('div');
    commentsContainer.id = 'comments';
    container.appendChild(commentsContainer);

    console.log(commentsArray);

    commentsArray.map((comment)=> {
        const cDiv = document.createElement('div');
        cDiv.id = `comment-${comment.id}`;
        cDiv.classList = `comment`;

        const cTitle = document.createElement('h2');
        cTitle.innerHTML = `${comment.name}`;

        cDiv.appendChild(cTitle);

        const cCode = document.createElement('code');
        cCode.innerHTML = `comment by: ${comment.email}`;

        cDiv.appendChild(cCode);
        
        const cBody = document.createElement('p');
        cBody.innerHTML = `${comment.body}`;

        cDiv.appendChild(cBody);

        commentsContainer.appendChild(cDiv);
    });
    container.appendChild(commentsContainer);
    return container;
};

// we can also use state