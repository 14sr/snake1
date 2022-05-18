const rows = document.querySelectorAll('.row');

const getItemAt = (x, y) => rows[y - 1].children[x - 1];
const checkItemAt = (x, y) => getItemAt(x, y).checked = true;
const unCheckItemAt = (x, y) => getItemAt(x, y).checked = false;

const placeAppleAt = (x, y) => {
    getItemAt(x, y).type = 'radio';
    checkItemAt(x, y);
}

const removeAppleAt = (x, y) => {
    getItemAt(x, y).type = 'checkbox';
    unCheckItemAt(x, y);
}