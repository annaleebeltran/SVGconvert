// Variables for the functions for testing the individual shapes .js files
const Circle = require('../lib/circle');
const Triangle = require('../lib/triangle');
const Square = require('../lib/square');

// Test for the circle.js file
describe('Circle', () => {
    it('should return a string for a circle', () => {
      const shape = new Circle;
      shape.setColor('blue');

      expect(shape.render()).toEqual('<circle cx="150" cy="100" r="80" fill="blue"/>');
    });
  });

// Test for the triangle.js file
describe('Triangle', () => {
    it('should return a string for a triangle', () => {
      const shape = new Triangle;
      shape.setColor('red');

      expect(shape.render()).toEqual('<polygon points="0,200 300,200 150,0" fill="blue"/>');
    });
  });

// Test for the square.js file
describe('Square', () => {
    it('should return a string for a square', () => {
      const shape = new Square;
      shape.setColor('green');

      expect(shape.render()).toEqual('<rect x="10" y="10" width="100%" height="100%" fill="blue"/>');
    });
  });