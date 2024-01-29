import inquirer from 'inquirer';
import { generateSVG, writeSVGFile } from './lib/svgGenerator.js';

// This function prompts the user for the logo details
async function promptUser() {
  const questions = [
    {
      type: 'input',
      name: 'text',
      message: 'Enter up to three characters for the logo:',
      validate: input => {
        // Validation to ensure only up to three characters are entered
        if (input.length > 0 && input.length <= 3) {
          return true;
        }
        return 'Please enter up to three characters.';
      }
    },
    {
      type: 'input',
      name: 'textColor',
      message: 'Enter a color keyword or hexadecimal for the text:',
      default: 'white' // Providing a default value
    },
    {
      type: 'list',
      name: 'shapeType',
      message: 'Choose a shape for your logo:',
      choices: ['circle', 'triangle', 'square'],
      default: 'circle' // Providing a default value
    },
    {
      type: 'input',
      name: 'shapeColor',
      message: 'Enter a color keyword or hexadecimal for the shape:',
      default: 'green' // Providing a default value
    }
  ];

  return inquirer.prompt(questions);
}

// Main function to run the application
async function main() {
  try {
    // Prompt the user for input
    const userInput = await promptUser();

    // Generate the SVG content based on user input
    const svgContent = generateSVG(userInput);

    // Write the SVG content to a file
    writeSVGFile(svgContent);

    console.log('Your logo has been generated successfully!');
  } catch (error) {
    // Log any errors to the console
    console.error('An error occurred while generating the logo:', error);
  }
}

// Run the main function
main();
