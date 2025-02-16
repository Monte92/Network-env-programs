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

class Car {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    getCarInfo() {
        console.log("Manufacturer:" + this.make + " Model:" + this.model + " Manufacturing year:" + this.year);
    }
}

const audi = new Car("Audi", "A3", 1992);
audi.getCarInfo();
