function openPopUp(id) {
    document.getElementById(id).style.display='block';
}
function closePopUp(id) {
    document.getElementById(id).style.display='none';
}
function switchItem(button) {
    const item = button.parentElement
    const link = item.querySelector('a');
    if (button.innerText == '-') {
        item.style.padding = '2px'
        button.innerText = '+'
        button.style.fontSize = '25px'
        button.style.top = '-5px'
        link.style.display = 'none';
    }
    else {
        item.style.padding = '10px'
        button.innerText = '-'
        button.style.fontSize = '30px'
        button.style.top = '-15px'
        link.style.display = '';
    }
}

