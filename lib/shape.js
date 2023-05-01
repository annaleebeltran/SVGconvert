class shapes {
  constructor(logoName, logoColor, logoShape, shapeColor) {
    this.logoName = logoName;
    this.logoColor = logoColor;
    this.logoShape = logoShape;
    this.shapeColor = shapeColor;
  }
  setShapeColor(shapeColor) {
    this.shapeColor = shapeColor;
  }
}

module.exports = shapes;
