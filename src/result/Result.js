import React, { Component } from 'react';

class Result extends Component {

    constructor(props) {
        super(props);

        this.determineType = this.determineType.bind(this);

        this.state = {
            triangleType: this.determineType()
        };
    }

    /**
    * Identifies the type of the triangle based on the length of the sides.
    * A triangle is:
    * - equilateral if all sides are equal,
    * - isosceles if any two of the sides are equal,
    * - scalene f none of the sides are equal to one another
    * The method works by making three comparisons, comparing each side to the remaining two.
    * If the comparison returns true, a counter is incremented. If the value is 3 or 2,
    * the type is determined to be equilateral, isosceles if it's 1 and scalene if no comparison
    * returns true
    */
    determineType() {
        let sides = this.props.sides;

        let equalSides = 0;

        if(sides[0] === sides[1]) { equalSides++; }
        if(sides[1] === sides[2]) { equalSides++; }
        if(sides[2] === sides[0]) { equalSides++; }

        switch(equalSides) {
            case 3 :
            case 2 :
               return 'equilateral';
            case 1 :
                return 'isosceles';
            case 0:
                return 'scalene';
            default :
                return 'unknown'
        }
     }

    render() {
        return (
            <div>
                <p>This is an {this.state.triangleType} triangle.</p>
            </div>
        )
    }
}

export default Result;