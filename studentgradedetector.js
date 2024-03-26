//Students grade generator
function marks (grade) {
    var result;
    if(grade >= 80){
    result = ('A');
}  
   else
    if(grade >= 60){
    result = ('B');
}
    else
    if(grade >= 59){
    result = ('C');
}
    else
    if(grade >= 40){
    result = ('D');
}

   else
    if(grade <= 39){
    result = ('E');

}

return result;
}
//Test case
console.log(marks(2));


