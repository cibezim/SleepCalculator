const getSleepHours = day => {

    switch (day.toLowerCase()) {
        case 'monday' :
            return 8;
            break;
        case 'tuesday' :
            return 7;
            break;
        case 'wednesday' :
            return 5;
            break;
        case 'thursday' :
            return 9;
            break;
        case 'friday' :
            return 8;
            break;
        case 'saturday' :
            return 7;
            break;
        case 'sunday' :
            return 6;
            break;
        default:
            console.log('Invalid input');
            break;
    }
}

function getActualSleepHours() {
    return getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday');
}

function getIdealSleepHours() {
    const idealHours = 8;
    return idealHours * 7;
}

function calculateSleepDebt() {
    const actualSleepHours = getActualSleepHours();

    const idealSleepHours = getIdealSleepHours();

    if(actualSleepHours === idealSleepHours) {
        console.log('Got perfect amount of sleep')
    } else if(actualSleepHours > idealSleepHours) {
        console.log(`Got more than enough sleep by ${actualSleepHours - idealSleepHours} hours`)
    } else {
        console.log(`'You need to get more sleep by ${actualSleepHours - idealSleepHours} hours'`)
    }
}

calculateSleepDebt()