function checkCardNumber(arr){
    if(arr.length !== 16){
        return;
    }
    else{
        arr.reverse();
        let sum = 0;
        for(let i = 0; i < arr.length; i++){
            if(i%2 !== 0){
                let multiply = arr[i]*2;
                if(multiply > 9){
                    arr[i] = multiply - 9;
                }
            }
            sum += arr[i];
        }
        if(sum%10 === 0){
            console.log(`${arr} is valid`);
        }
        else{
            console.log('Invalid card number');
        }
    }
}
const numbers = [2, 5, 4, 9, 6, 7, 8, 9, 0, 1, 2, 3, 5, 8, 9, 3];
checkCardNumber(numbers);