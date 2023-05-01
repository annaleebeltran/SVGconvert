const Circle = require("./circle");
const Triangle = require("./triangle");
const Square = require("./square");

const setShape = (data) => {
  const shape = data.logoShape;
  switch (shape) {
    case "Circle":
      const circle = new Circle(
        data.logoName,
        data.logoColor,
        data.logoShape,
        data.shapeColor
      );
      return circle.render();

    case "Triangle":
      const triangle = new Triangle(
        data.logoName,
        data.logoColor,
        data.logoShape,
        data.shapeColor
      );
      return triangle.render();

    case "Square":
      const square = new Square(
        data.logoName,
        data.logoColor,
        data.logoShape,
        data.shapeColor
      );
      return square.render();

    default:
      return "Please enter a valid shape!";
  }
};

const generateShapeSVG = (data) => {
  if (data.logoName.length > 3) {
    throw new error("Please enter a logo text with 3 characters or less!");
  }
  return `
    <svg 
    version="1.1"
    width="300" height="200"
    xmlns='http://www.w3.org/2000/svg'>
        ${setShape(data)}
        <text x="50%" y="50%" text-anchor="middle" fill="${this.logoColor}">${
    this.logoName
  }</text>
        </svg>`;
};

module.exports = generateShapeSVG;
