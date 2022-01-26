//task 1
function getGrade(total) {
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
    } else if (total < 30) {
        console.log('YOU FAILED!');
    }
}
getGrade(51);