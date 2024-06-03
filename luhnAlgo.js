function checkCardNumber(arr){
    if(arr.length < 16){
        // console.log('Credit card number is supposed to be 16 characters');
        return;
    }
    else{
        for(let i = arr.length -1; i >= 0; i--){
            // console.log(arr[i]);
            if(i%2 !== 2){
                let multiply = arr[i]*2;
                if(multiply > 9){
                    multiply = multiply - 9;
                    }
                let index = arr.indexOf(arr[i], i)
                if(index !== 0){
                    let temp = arr[i];
                    arr[i] = multiply;
                }
            }
            console.log(arr[i]);
        }
    }
}
const numbers = [2, 5, 4, 9, 6, 7, 8, 9, 0, 1, 2, 3, 5, 8, 9, 3];
checkCardNumber(numbers);