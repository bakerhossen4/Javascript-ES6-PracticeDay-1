const checkbig = ( array ) => {
    let mx = array[0];
    for( let i = 1; i < array.length; i++ ){
        if( mx < array[i] ){
            mx = array[i];
        }
    }
    return mx;
}

const numbers = [1,2,3,3,4,4,5,6,7,8,9,10];
const answer = checkbig( numbers );
console.log( answer )

