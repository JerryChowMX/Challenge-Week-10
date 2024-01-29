import fs from 'fs';
import { Circle, Square, Triangle } from './shapes.js'; // Ensure the extension .js is present

// This function will create SVG markup for the chosen shape
function createShape(shapeType, color) {
  switch (shapeType.toLowerCase()) {
    case 'circle':
      return new Circle(color).svgMarkup();
    case 'triangle':
      return new Triangle(color).svgMarkup();
    case 'square':
      return new Square(color).svgMarkup();
    default:
      throw new Error('Invalid shape type');
  }
}

// This function will create SVG markup for the text
function createText(text, color) {
  // SVG text element with a simple font-family and size for demo purposes
  return `<text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="${color}" font-family="Verdana" font-size="35">${text}</text>`;
}

// This function will assemble the SVG content
export function generateSVG({ text, textColor, shapeType, shapeColor }) {
  // Basic SVG template with a viewBox that comfortably fits all our shapes
  const svgStart = `<svg width="300" height="200" viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">`;
  const svgEnd = `</svg>`;

  // Generate SVG markup for the chosen shape and text
  const shapeMarkup = createShape(shapeType, shapeColor);
  const textMarkup = createText(text, textColor);

  // Combine all parts to form the final SVG markup
  const svgContent = `${svgStart}${shapeMarkup}${textMarkup}${svgEnd}`;

  return svgContent;
}

// Function to write the SVG content to a file
export function writeSVGFile(svgContent, filename = 'logo.svg') {
  fs.writeFileSync(filename, svgContent, 'utf8');
  console.log(`Generated ${filename}`);
}
