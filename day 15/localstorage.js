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
    this.reset();
}

function populateList(){
    
}


addItems.addEventListener('submit', addItem)