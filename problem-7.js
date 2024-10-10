const checkbig = ( array ) => {
    let a = [0,0,0,0,0,0,0,0,0,0,0];
    let b = [];
    for( let i = 0; i < array.length; i++ ){
        a[array[i]]++;
    }
    for( let j = 0; j < a.length; j++ ){
        if(a[j] >= 1 ) {
            b.push(j);
        }
    }
    return b;
}
const numbers = [1,2,3,3,4,4,5,6,7,8,9,10];
const answer = checkbig( numbers );
console.log(answer);