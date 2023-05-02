const Shape = require("./shape");

class Circle extends Shape {
  constructor(logoName, logoColor, logoShape, shapeColor) {
    super(logoName, logoColor, logoShape, shapeColor)
  }
  render() {
    return `
            <circle cx="150" cy="100" r="80" fill="${this.shapeColor}" />
        
        `;
  }
}

module.exports = Circle;
