window.onload = function setTemplate() {
    document.getElementById('allComments').innerHTML = localStorage.getItem('template');
};

const commentContainer = document.getElementById('allComments');
document.getElementById('addComments').addEventListener('click', function (ev) {
   addComment(ev);
});

function addComment(ev) {
    let commentText, wrapDiv;
    const textBox = document.createElement('div');
    const ResponderButton = document.createElement('button');
    
    ResponderButton.className = 'Responder';
    ResponderButton.innerHTML = 'Responder';
    const GosteiButton = document.createElement('button');
    GosteiButton.innerHTML = 'Gostei';
    GosteiButton.className = 'GosteiComment';
    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = 'Delete';
    deleteButton.className = 'deleteComment';
    if(hasClass(ev.target.parentElement, 'container')) {
        const wrapDiv = document.createElement('div');
        wrapDiv.className = 'wrapper';
        wrapDiv.style.marginLeft = 0;
        commentText = document.getElementById('comment').value;
        document.getElementById('comment').value = '';
        textBox.innerHTML = commentText;
        textBox.style.backgroundColor = "#FDF1EB";
        wrapDiv.append(textBox, ResponderButton, GosteiButton, deleteButton);
        commentContainer.appendChild(wrapDiv);
    } else {
        wrapDiv = ev.target.parentElement;
        commentText = ev.target.parentElement.firstElementChild.value;
        textBox.innerHTML = commentText;
        textBox.style.backgroundColor = "#FDF1EB";
        wrapDiv.innerHTML = '';
        wrapDiv.append(textBox, ResponderButton, GosteiButton, deleteButton);
    }
    setOnLocalStorage();
}

function setOnLocalStorage () {
    localStorage.setItem('template', document.getElementById('allComments').innerHTML);
}
function hasClass(elem, className) {
    return elem.className.split(' ').indexOf(className) > -1;
}
document.getElementById('allComments').addEventListener('click', function (e) {
    if (hasClass(e.target, 'Responder')) {
        const parentDiv = e.target.parentElement;
        const wrapDiv = document.createElement('div');
        wrapDiv.style.marginTop = (Number.parseInt(parentDiv.style.marginTop) + 15).toString() + 'px';
        wrapDiv.style.marginLeft = (Number.parseInt(parentDiv.style.marginLeft) + 15).toString() + 'px';
        wrapDiv.className = 'wrapper';
        const textArea = document.createElement('textarea');
        textArea.style.marginRight = '20px';
        textArea.style.marginTop = '20px';
        const addButton = document.createElement('button');
        addButton.className = 'addResponder';
        addButton.innerHTML = 'Enviar';
        const cancelButton = document.createElement('button');
        cancelButton.innerHTML = 'Cancelar';
        cancelButton.className='cancelResponder';
        wrapDiv.append(textArea, addButton, cancelButton);
        parentDiv.appendChild(wrapDiv);

    } else if(hasClass(e.target, 'addResponder')) {
        addComment(e);
    } else if(hasClass(e.target, 'GosteiComment')) {
         const GosteiBtnValue = e.target.innerHTML;
         e.target.innerHTML = GosteiBtnValue !== 'Gostei' ? Number.parseInt(GosteiBtnValue)  + 1 : 1 ;
        setOnLocalStorage();
    } else if(hasClass(e.target, 'cancelResponder')) {
        e.target.parentElement.innerHTML = '';
        setOnLocalStorage();
    } else if(hasClass(e.target, 'deleteComment')) {
        e.target.parentElement.remove();
    }
});
