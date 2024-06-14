// const item = document.querySelectorAll('.item');
// const itemArr = Array.from(item);
// itemArr.forEach(item=>{
//     const checkbox = item.querySelectorAll('input[checkbox]');
// });

// itemArr.addEventListener('onclick', (e)=>{
//     console.log(e);
// })
const checkbox = document.querySelectorAll('input[type=checkbox]');
const arr = Array.from(checkbox);
let lastchecked;
arr.forEach(item=>{
    item.addEventListener('click', handleCheck);
});

function handleCheck(e){
    if(e.shiftKey && this.checked){
        
    }
    lastchecked = this
}
