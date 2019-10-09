function submitComment() {
    // assigning DOM elements
    const inputField = document.getElementById('name');
    let name = inputField.value;
    const textArea = document.getElementById('msg');
    const msg = textArea.value;
    // comment validation
    if (doesNotPassAllValidations(name, msg)) {
        return null
    }
    if (name[0] !== name[0].toUpperCase()) {
        name = name[0].toUpperCase() + name.substring(1);
    }
    // creating new elements
    const comment = document.createElement('section');
    const h3 = document.createElement('h3');
    const p = document.createElement('p');
    // adding content to new elements
    h3.innerHTML = `${name} said :`;
    p.innerHTML = msg;
    comment.classList.add('comment');
    comment.appendChild(h3);
    comment.appendChild(p);
    // Adding new comment to page
    const commentSection = document.getElementById('comments');
    commentSection.appendChild(comment);

    inputField.value = null;
    textArea. value = null;
}

function doesNotPassAllValidations(name, msg) {
    if (!msg) {
        alert('You forgot to fill in your message !');
        return true;
    }
    if (!name) {
        alert('You forgot to fill in your name !');
        return true;
    }
    if (msg.length > 280) {
        alert('Please write a shorter message !');
        return true;
    }
    return false;
}