const grade = 80;
if( grade < 0 ){
    console.log('Failed');
}
else if( grade >= 0 && grade < 40 ){
    console.log('C');
}
else if( grade >= 40 &&  grade < 60 ){
    console.log('B'); 
}
else if( grade >= 60 && grade < 70 ){
    console.log('A-');
}
else if( grade >= 70 && grade < 80 ){
    console.log('A');
}
else{
    console.log('A+')
}