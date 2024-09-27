const year = 2000;

if( year % 400 == 0 || ( year % 100 != 0 && year % 4 == 0 ) ){
    console.log( year + ' is Leap Year');
}
else{
    console.log('It is not a leap Year')
}