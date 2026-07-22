function openPopUp(id) {
    document.getElementById(id).style.display='block';
}

function closePopUp(id) {
    document.getElementById(id).style.display='none';
}

function switchItem(button) {
    const item = button.parentElement
    console.log(button.innerText, item);
    const link = item.querySelector('a');
    if (button.innerText == '-') {
        button.innerText = '+'
        button.style.top = '-5px'
        link.style.display = 'none';
    }
    else {
        button.innerText = '-'
        button.style.top = '-15px'
        link.style.display = '';
    }
}

