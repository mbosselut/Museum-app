function submitComment() {
    // assign DOM elements
    const inputField = document.getElementById('name');
    const name = inputField.value;
    const textArea = document.getElementById('msg');
    const msg = textArea.value;
    // create new elements
    const comment = document.createElement('section');
    const h3 = document.createElement('h3');
    const p = document.createElement('p');
    // add content to new elements
    h3.innerHTML = `${name} said :`;
    p.innerHTML = msg;
    comment.classList.add('comment');
    comment.appendChild(h3);
    comment.appendChild(p);
    // Add new comment to page
    const commentSection = document.getElementById('comments');
    commentSection.appendChild(comment);

    inputField.value = null;
    textArea. value = null;
}