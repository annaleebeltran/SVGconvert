const Shape = require('./shape');

class Triangle extends Shape {
    constuctor(logoName, logoColor, logoShape, shapeColor) {
        super(logoName, logoColor, logoShape, shapeColor);
    }
    render() {
        return `
        <svg width="300" height="200">
            <polygon points="150,0 300,200 0,200" fill="${this.shapeColor}" />
            <text x="50%" y="50%" text-anchor="middle" stroke="${this.logoColor}" stroke-width="1px" dy=".3em">${this.logoName}</text>
        </svg>
        `;
    }
}

module.exports = Triangle;
