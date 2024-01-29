import { Circle, Square, Triangle } from './lib/shapes.js';

describe('Shape Classes', () => {
  describe('Circle Class', () => {
    it('should create a circle with the correct SVG markup', () => {
      const color = '#FF5733'; // A sample color
      const circle = new Circle(color);
      const svgMarkup = circle.svgMarkup();
      expect(svgMarkup).toContain('circle');
      expect(svgMarkup).toContain(`fill="${color}"`);
    });
  });

  describe('Square Class', () => {
    it('should create a square with the correct SVG markup', () => {
      const color = '#33FF57'; // A sample color
      const square = new Square(color);
      const svgMarkup = square.svgMarkup();
      expect(svgMarkup).toContain('rect');
      expect(svgMarkup).toContain(`fill="${color}"`);
    });
  });

  describe('Triangle Class', () => {
    it('should create a triangle with the correct SVG markup', () => {
      const color = '#3357FF'; // A sample color
      const triangle = new Triangle(color);
      const svgMarkup = triangle.svgMarkup();
      expect(svgMarkup).toContain('polygon');
      expect(svgMarkup).toContain(`fill="${color}"`);
    });
  });
});
