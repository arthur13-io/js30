const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
const input = document.querySelector('input[type=text]');
var items = [];

function addItem(e){
    e.preventDefault();
    const text = input.value;
    const item = {
        text,
        done: false
    }
    items.push(item);
    populateList(items, itemsList);
    this.reset();
}

function populateList(items = [], itemList){
    itemList.innerHTML = items.map((item, i)=>{
        return `
        <li>
        <input type="checkbox" data-index="${i}" id="item${i}" checked>
        <label for="item${i}">${item.text}</label>
        </li>
        `
    }).join('');
}


addItems.addEventListener('submit', addItem)