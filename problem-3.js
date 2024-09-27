
const array = [1,2,3,5,4,8,7,6,20,19,18,17,16,15,12,13,14,11,10,9]

for( let i = 0; i < array.length; i++ ){
    for( let j = 0; j < array.length - 1; j++ ){
        if( array[j] > array[j + 1] ){
            let temp = array[j];
            array[j] = array[j + 1];
            array[j + 1] = temp;
        }
    }
}



console.log(array)