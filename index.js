// Your code here
class Polygon {
  constructor(sides) {
    this.sides = sides;
  }

  get countSides() {
    return this.sides.length;
  }

  get perimeter() {
    return this.sides.reduce((acc, side) => acc + side, 0);
  }
}

class Triangle extends Polygon {
  get isValid() {
    const [a, b, c] = this.sides;
    return a + b > c && a + c > b && b + c > a;
  }
}

class Square extends Polygon {
  get isValid() {
    return this.sides.every((side, _, arr) => side === arr[0]);
  }

  get area() {
    const [a] = this.sides;
    return a * a;
  }
}

const triangle = new Triangle([3, 4, 5]);
console.log(triangle.countSides); // Output: 3
console.log(triangle.perimeter); // Output: 12
console.log(triangle.isValid); // Output: true

const square = new Square([15, 25, 15, 15]);
console.log(square.countSides); //4
console.log(square.perimeter); // 70
console.log(square.isValid); // Output: false
console.log(square.area); //  225
