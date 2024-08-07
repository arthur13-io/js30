const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
const input = document.querySelector('input[type=text]');
const items = JSON.parse(localStorage.getItem('items')) || [];

//adding items
function addItem(e){
    e.preventDefault();
    const text = input.value;
    const item = {
        text,
        done: false
    }
    items.push(item);
    populateList(items, itemsList);
    localStorage.setItem('items', JSON.stringify(items));
    this.reset();
}
//Creating a list of items
function populateList(items = [], itemList){
    itemList.innerHTML = items.map((item, i)=>{
        return `
        <li>
        <input type="checkbox" data-index="${i}" id="item${i}" ${item.done ? 'checked': ''}>
        <label for="item${i}">${item.text}</label>
        </li>
        `
    }).join('');
}
//Toggling checkboxes using event delegation
function toggleDone(e){
    if(!e.target.matches('input')) return;
    const index = e.target.dataset.index;
    items[index].done = !items[index].done;
    localStorage.setItem('items', JSON.stringify(items));
    populateList(items, itemsList);
}

addItems.addEventListener('submit', addItem);
itemsList.addEventListener('click', toggleDone);
populateList(items, itemsList)