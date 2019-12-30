import React from 'react';
import {Container} from 'unstated'
import md5 from "md5";


export default class PointsContainer extends Container {
    state = {
        points: 0,
    };


    addPointsfromDistance = async kilometer => {
        let pointsToGive = 0;

        if (kilometer === 0) {
            pointsToGive = 0;
        } else if (kilometer < 10) {
            pointsToGive = 50;
        } else if (kilometer >= 10) {
            pointsToGive = 100;
        } else if (kilometer >= 15) {
            pointsToGive = 200;
        } else {
            pointsToGive = 500;
        }

        await this.setState({points: pointsToGive});
    };


    creditPointsUser= async (points, id)=>{
        console.log(points);
        console.log(id);


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

        console.log(responseJson)
        if(responseJson.error) {
            alert(responseJson.description);
            return null;
        } else {
            console.log(responseJson);
        }
    }
}