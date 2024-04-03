//Students grade generator
function marks(marks) {
    var result;
    if(grade >= 70){
    result = ('A');
}  
   else
    if(grade >= 60){
    result = ('B');
}
    else
    if(grade >= 50){
    result = ('C');
}
    else
    if(grade >= 40){
    result = ('D');
}

   else
    if(grade <= 40){
    result = ('E');

}

return result;
}
//Test case
//console.log(marks(2));


function promptAndCalculateGrade() {
    var marks = parseInt(prompt("Enter student marks (between 0 and 100):"));

    // Validate input
    if (isNaN(marks) || marks < 0 || marks > 100) {
        alert("Invalid input. Marks must be between 0 and 100.");
        return;
    }

    var grade = marks(marks);
    alert("Grade: " + grade);

    // Create URL
    var url = window.location.href.split('?')[0] + `?grade=$marks}`;
    console.log("URL:" , url);


}



