function checkName(a, b) {
    if (a.length !== b.length) {
        console.log("The strings must be of the same length.");
        return;
    }

    let aArray = a.split('');
    let bArray = b.split('');

    // Sort both arrays
    aArray.sort();
    bArray.sort();

    // Check if they are now the same
    if (aArray.join('') !== bArray.join('')) {
        console.log("The strings cannot be made identical.");
        return;
    }

    // Convert back to original unsorted arrays
    aArray = a.split('');
    bArray = b.split('');

    // Swap elements to make them identical
    for (let i = 0; i < aArray.length; i++) {
        if (aArray[i] !== bArray[i]) {
            let index = bArray.indexOf(aArray[i], i); // find the first occurrence of aArray[i] in bArray
            if (index !== -1) {
                // Swap elements in bArray
                let temp = bArray[i];
                bArray[i] = bArray[index];
                bArray[index] = temp;
            }
        }
    }

    a = aArray.join('');
    b = bArray.join('');

    console.log(a, b);
}
checkName('david', 'vidad');