import React from 'react';
import {Container} from 'unstated'

//this container is used to give points to the user after accomplishing a mission.
export default class PointsContainer extends Container {
    state = {
        points: 0,
        totalPoints: null,
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


    //this will update the points for this user in the DB.
    creditPointsUser = async (points, id) => {
        const response = await fetch('http://sustainableme.fablabnetwork.tk/API/addPoints.php', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                points: points,
                id: id,


            }),
        }).catch((error) => {
            console.error(error);
            return null;
        });

        const responseJson = await response.json();
        if (responseJson.error) {
            alert(responseJson.description);
            return null;
        } else {
            await this.setState({totalPoints: responseJson.points})
        }
    };

    //after accomplishing the mission, the totalpoints are reset for a further mission
    resetPoints = () => {
        this.setState({totalPoints: null})
    };
}