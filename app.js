function printOdd(count) {
    for (let i = 1; i <= count; i ++){
        if(i % 2 != 0) {
            console.log(1);
        }
    }
}

printOdd(10); //1,3,5,7,9
printOdds(100); // 1,3,5-99


// Exercise 2 Section
function checkAge(name,age) {
    let oldEnoughMsg = 'Congrats ${name}! You can drive!';
    let tooYoungMsg = 'Sorry ${name}, you need to wait {16 - age} year(s) until you can drive.';

    if (age < 16) {
        console.log(tooYoungMsg);
    }else {
        console.log(oldEnoughMsg);
    }
}

checkAge("");
checkAge('');
checkAge("Cameron", 21);

//Exercise 3: Quadrant
function checkQuadrant(x,y) {
    if(x > 0 && y > 0) {
        return 1;
    }else if (x < 0 && y > 0) {
      return 2;
    }else if( x < 0 && y < 0) {
        return 3;
    }else if(x > 0 && y < 0 ) {
        return 4;
    }else if( x ==0 && y != 0) {
        return "X Axis";
    }else if (x != 0 && y == 0) {
        return "Y Axis";
    }else {
        return "origin";
    }
}

// Exercise 4: Triangles
function isValidTriangle(a,b,c) {
    return a + b > c || a + c > b || b + c > a;
}

function checkTriangle( a, b, c) {
let isValid = isValidTriangle(a, b, c);
if (isValid) {
}if (a == b && b == c) {
    return 'Equilateral';
}else if (a == b || b == c || a == c) {
    return 'Isoseceles';
}else {
    return ' Not a valid triangle.';
}
}

//Exercise 5: Data Plan Status
function dataUsageFeedback(planLimit, day, usage) {
    let periodLenght = 30;
    let currentAvg = usage / day;
    let projectedAvg = planLimit / periodLenght;
    let remainingData = planLimit - usage;
    let projectedUsage = remainingDays * currentAvg;
    let statusMsg;


    if(currentAvg > projectedAvg) {
        statusMsg = "EXCEEDING";
    }else if(currentAvg < projectedAvg) {
        statusMsg = "UNDER";
    } else {
        statusMsg = "AT"
    }


}