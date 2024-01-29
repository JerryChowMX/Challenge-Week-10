const { generateSVG } = require('../lib/svgGenerator');
const { Circle, Square, Triangle } = require('../lib/shapes');

// Describe block for SVG Generator tests
describe('SVG Generator', () => {

  // Test for generating Circle SVG content
  it('should generate correct SVG markup for a Circle', () => {
    const input = {
      text: 'SVG',
      textColor: 'white',
      shapeType: 'circle',
      shapeColor: 'green'
    };
    const svgContent = generateSVG(input);
    const circle = new Circle(input.shapeColor);

    // Expect SVG content to include circle markup
    expect(svgContent).toContain(circle.svgMarkup());
    // Expect SVG content to include text markup
    expect(svgContent).toContain(input.text);
    // Expect SVG content to include the correct text color
    expect(svgContent).toMatch(new RegExp(`fill="${input.textColor}"`));
  });

  // Test for generating Square SVG content
  it('should generate correct SVG markup for a Square', () => {
    const input = {
      text: 'JS',
      textColor: 'black',
      shapeType: 'square',
      shapeColor: 'blue'
    };
    const svgContent = generateSVG(input);
    const square = new Square(input.shapeColor);

    // Expect SVG content to include square markup
    expect(svgContent).toContain(square.svgMarkup());
    // Expect SVG content to include text markup
    expect(svgContent).toContain(input.text);
    // Expect SVG content to include the correct text color
    expect(svgContent).toMatch(new RegExp(`fill="${input.textColor}"`));
  });

  // Test for generating Triangle SVG content
  it('should generate correct SVG markup for a Triangle', () => {
    const input = {
      text: 'JS',
      textColor: 'black',
      shapeType: 'triangle',
      shapeColor: 'red'
    };
    const svgContent = generateSVG(input);
    const triangle = new Triangle(input.shapeColor);

    // Expect SVG content to include triangle markup
    expect(svgContent).toContain(triangle.svgMarkup());
    // Expect SVG content to include text markup
    expect(svgContent).toContain(input.text);
    // Expect SVG content to include the correct text color
    expect(svgContent).toMatch(new RegExp(`fill="${input.textColor}"`));
  });

});

