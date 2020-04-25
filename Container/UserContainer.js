import React from 'react';
import {Container} from 'unstated'

//this container provides functions to acces the list of user and to calculate the current level of a user.
export default class UserContainer extends Container {
    state = {
        userlist: null,
		//points associated to the level, index + 1 is the level, points are the exclusive max bound (i.e. lvl 1 from 0 to 999 points)
		levels: [1000,
					2000,
					3100,
					4300,
					5600,
					7000,
					8500,
					10100,
					11800,
					13600,
					15500,
					17500,
					19600,
					21800,
					24100,
					26500,
					29000,
					31600,
					34300,
					37100,
					40000,
					43000,
					46100,
					49300,
					52600,
					56000,
					59500,
					63100,
					66800,
					70600]
    };

    //gets the list of users in the db
    getUsers = async () => {

        const response = await fetch('http://sustainableme.fablabnetwork.ml/API/getUsers.php', {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            }
        }).catch((error) => {
            console.error(error);
            return null;
        });

        const responseJson = await response.json();

        if (responseJson.error) {
            //console.log(responseJson.error);
            return null;
        } else {
            await this.setState({userlist: responseJson});
            const theList = this.calculateLevels();

            return theList;
        }

    };

    //defines what level correspond to which range of points.
    whatLevel = points => {
		for(let i = 0; i < this.state.levels.length; i++) {
			if(points < this.state.levels[i]) {
				return i + 1;
			}
		}
		return this.state.levels.length + 1;
    };

    //takes the points of an user and calculates the level he is currently in
    calculateLevels = () => {

        if (this.state.userlist !== null) {
            const theUsers = this.state.userlist.map(user => {
                const theLevels = this.whatLevel(user.points);
                return {
                    name: user.name,
                    points: user.points,
                    level: theLevels
                }
            });
            const sorted = theUsers.sort(function (a, b) {
                return (b.points) - (a.points);
            });
            return sorted;
        } else {
            return null;
        }

    }


    //compute the points left a user needs to reach the next level
    computePointsLeft = (points) => {
		const level = this.whatLevel(points) - 1;
		if(level >= this.state.levels.length) {
			return -1;
		} else {
			return this.state.levels[level] - points;
		}
    }
}
