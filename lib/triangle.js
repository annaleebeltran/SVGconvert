const Shape = require("./shape");

class Triangle extends Shape {
  constructor(logoName, logoColor, logoShape, shapeColor) {
    super(logoName, logoColor, logoShape, shapeColor);
  }
  render() {
    return `
            <polygon points="150,0 300,200 0,200" fill="${this.shapeColor}" />
          
        `;
  }
}

module.exports = Triangle;
