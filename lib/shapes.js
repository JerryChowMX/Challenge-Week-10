// Base Shape class
class Shape {
  constructor(color) {
    this.color = color;
  }

  // Method to generate common SVG attributes
  svgAttributes() {
    return `fill="${this.color}"`;
  }

  // Placeholder for the method to generate SVG markup, to be overridden by subclasses
  svgMarkup() {
    throw new Error('svgMarkup() must be implemented');
  }
}

// Circle class
export class Circle extends Shape {
  constructor(color) {
    super(color);
    this.radius = 50; // Assuming a fixed radius for simplicity
  }

  svgMarkup() {
    return `<circle cx="100" cy="100" r="${this.radius}" ${this.svgAttributes()} />`;
  }
}

// Square class
export class Square extends Shape {
  constructor(color) {
    super(color);
    this.sideLength = 100; // Assuming a fixed side length for simplicity
  }

  svgMarkup() {
    return `<rect x="50" y="50" width="${this.sideLength}" height="${this.sideLength}" ${this.svgAttributes()} />`;
  }
}

// Triangle class
export class Triangle extends Shape {
  constructor(color) {
    super(color);
    this.base = 100; // Assuming a fixed base for simplicity
    this.height = 86.6; // Height for an equilateral triangle with a base of 100
  }

  svgMarkup() {
    // Points for an equilateral triangle centered in the SVG
    return `<polygon points="50,${150 - this.height} 150,${150 - this.height} 100,${150}" ${this.svgAttributes()} />`;
  }
}
