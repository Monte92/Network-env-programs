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

const nums = [1, 2, 3, 4, 5];

const doubled = nums.map(num => num * 2);
const filteredNums = nums.filter(num => num > 2);

console.log(filteredNums);

console.log(doubled);

