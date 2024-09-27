const checkbig = ( array ) => {
    let mx = array[0];
    for( let i = 1; i < array.length; i++ ){
        if( mx.length < array[i].length ){
            mx = array[i];
        }
    }
    return mx;
}

const friends = ["rahim","karim","abdul","sadsd","heroAlam"];
const answer = checkbig( friends );
console.log( answer )

