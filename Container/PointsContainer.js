import React from 'react';
import {Container} from 'unstated'

//this container is used to calculate points.
export default class PointsContainer extends Container {
    state = {
        points: 0,
    };

    //sets the points
    setPoints = async points => {
        await this.setState({points: points});
    }

    //this function is called by the transport mission and it gives point depending on
    //the distance the user has made by using public transportation.
    //need to parse the kilometer to floats
    addPointsfromDistance = async kilometer => {
        let pointsToGive = 0;
        var integerkm = parseFloat(kilometer);

        if (integerkm === 0.0) {
            pointsToGive = 0;
        } else if (integerkm < 10.0) {
            pointsToGive = 50;
        } else if (integerkm < 15.0) {
            pointsToGive = 100;
        } else if (integerkm < 20.0) {
            pointsToGive = 200;
        } else {
            pointsToGive = 500;
        }

        await this.setState({points: pointsToGive});
        return this.state.points
    };
}