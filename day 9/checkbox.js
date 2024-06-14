const checkbox = document.querySelectorAll('input[type=checkbox]');
const arr = Array.from(checkbox);
let lastchecked;
arr.forEach(item=>{
    item.addEventListener('click', handleCheck);
});

function handleCheck(e){
    let inBetween = false;
    if(e.shiftKey && this.checked){
        arr.forEach(check =>{
            const label = check.parentElement;
            if(check.checked){
                inBetween = !inBetween;
                label.classList.add('strikeThrough');
            }
            if(inBetween){
                check.checked = true;
                label.classList.add('strikeThrough');

            }
        })
    }
    lastchecked = this
}
