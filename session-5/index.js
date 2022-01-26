//task 1
/*function getGrade(total) {
    if (total > 90) {
        console.log('Yay, you got an A+!');
    } else if(total > 80 && total <= 90) {
        console.log('Well done you got an A!');
    } else if (total > 70 && total <= 80 ) {
        console.log('Nice work, B!')
    } else if (total > 60 && total <= 70 ) {
        console.log('Nice work, but we have some work to do, C!');
    } else if (total > 50 && total <= 60 ) {
        console.log('Get studying! you got a D!!');
    } else if (total > 40 && total <= 50 ) {
        console.log('You got an E, less Netflix more Books!');
    } else if (total > 30 && total <= 40 ) {
        console.log('E! shocking!');
    } else  {
        console.log('YOU FAILED!');
    }
}
getGrade(51);*/

function getGrade(total) {
switch(true) {
    case  total > 90:
    console.log('Yay, you got an A+!');
    break;
    case total > 80:
    console.log('You got an A');
    break;
    case  total > 70:
    console.log('you got a B');
    break;
    case  total > 60:
    console.log('you got a C');
    break;
    case total > 50:
    console.log('you got an D!');
    break;
    case total > 40:
    console.log(' you got an E!');
    break;
    default:
        console.log('You failed');
}
}
getGrade(88);