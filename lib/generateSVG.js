const Circle = require("./lib/circle");
const Triangle = require("./lib/triangle");
const Square = require("./lib/square");

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
      console.log("Please enter a valid shape!");
  }
};
