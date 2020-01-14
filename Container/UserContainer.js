import React from 'react';
import {Container} from 'unstated'


export default class UserContainer extends Container {
    state = {
        userlist: null,
    };

    getUsers = async () => {

        const response = await fetch('http://sustainableme.fablabnetwork.tk/API/getUsers.php', {
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
    whatLevel = points => {
        let level = null;

        if (points < 100) {
            level = 1;
        } else if (points < 200) {
            level = 2;
        } else if (points < 300) {
            level = 3;
        } else if (points < 400) {
            level = 4;
        } else if (points < 500) {
            level = 5;
        } else if (points < 700) {
            level = 6;
        } else if (points < 900) {
            level = 7;
        } else if (points < 1100) {
            level = 8;
        } else if (points < 1500) {
            level = 9;
        } else if (points < 2000) {
            level = 10;
        } else if (points < 2500) {
            level = 11;
        } else if (points < 3000) {
            level = 12;
        } else if (points < 4000) {
            level = 13;
        } else if (points < 5000) {
            level = 14;
        } else if (points < 50000) {
            level = 15;
        }
        if (points < 100){
            level=1;
        }else if(points <200){
            level=2;
        }else if(points <300){
            level=3;
        }else if(points <400){
            level=4;
        }else if(points <500){
            level=5;
        }else if(points <700){
            level=6;
        }else if(points <900){
            level=7;
        }else if(points <1100){
            level=8;
        }else if(points <1500){
            level=9;
        }else if(points <2000){
            level=10;
        }else if(points <2500){
            level=11;
        }else if(points <3000){
            level=12;
        }else if(points <4000){
            level=13;
        }else if(points <5000){
            level=14;
        } else if(points <50000) {
            level=15;
        } else {
			level=16;
		}

        return level;

    };

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


    computePointsLeft = (points) => {
        let pointsLeft = 0;

        if (points < 100) {
            pointsLeft = 100 - points;
        } else if (points < 200) {
            pointsLeft = 200 - points;
        } else if (points < 300) {
            pointsLeft = 300 - points;
        } else if (points < 400) {
            pointsLeft = 400 - points;
        } else if (points < 500) {
            pointsLeft = 500 - points;
        } else if (points < 700) {
            pointsLeft = 700 - points;
        } else if (points < 900) {
            pointsLeft = 900 - points;
        } else if (points < 1100) {
            pointsLeft = 1100 - points;
        } else if (points < 1500) {
            pointsLeft = 1500 - points;
        } else if (points < 2000) {
            pointsLeft = 2000 - points;
        } else if (points < 2500) {
            pointsLeft = 2500 - points;
        } else if (points < 3000) {
            pointsLeft = 3000 - points;
        } else if (points < 4000) {
            pointsLeft = 4000 - points;
        } else if (points < 5000) {
            pointsLeft = 5000 - points;
        } else {
            pointsLeft = 50000 - points;
        }
        return pointsLeft;
      if (points < 100){
          pointsLeft=100-points;
      }else if(points <200){
          pointsLeft=200-points;
      }else if(points <300){
        pointsLeft=300-points;
      }else if(points <400){
          pointsLeft=400-points;
      }else if(points <500){
          pointsLeft=500-points;
      }else if(points <700){
        pointsLeft=700-points;
      }else if(points <900){
          pointsLeft=900-points;
      }else if(points <1100){
          pointsLeft=1100-points;
      }else if(points <1500){
          pointsLeft=1500-points;
      }else if(points <2000){
        pointsLeft=2000-points;
      }else if(points <2500){
          pointsLeft=2500-points;
      }else if(points <3000){
          pointsLeft=3000-points;
      }else if(points <4000){
          pointsLeft=4000-points;
      }else if(points <5000){
          pointsLeft=5000-points;
      } else if(points <50000) {
        pointsLeft=50000-points;
      } else {
		pointsLeft = -1;
	  }

      console.log(pointsLeft);
      return pointsLeft;
    }
}
