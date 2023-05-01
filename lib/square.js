const Shape = require("./shape");

class Square extends Shape {
  constructor(logoName, logoColor, logoShape, shapeColor) {
    super(logoName, logoColor, logoShape, shapeColor);
  }
  render() {
    return `
            <rect x="20 y="20 width="300" height="200" fill="${this.shapeColor}" />
        `;
  }
}

module.exports = Square;
