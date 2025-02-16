function calculateArea(radius) {
    const area = Math.PI * (radius * radius)
    console.log(area.toFixed(2));
}

function compareNumbers(a, b) {
    console.log(a > b ? a : b);
}

calculateArea(5);
calculateArea(8);
calculateArea(10);

compareNumbers(3, 5);
compareNumbers(7, 5);
compareNumbers(3, 3);


