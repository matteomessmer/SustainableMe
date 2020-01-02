import React from 'react';
import {Container} from 'unstated'


export default class UserContainer extends Container {
    state = {
        userlist: null,
    };

    getUsers=async ()=>{

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

        if(responseJson.error) {
            console.log(responseJson.error);
            return null;
        } else {
           await this.setState({userlist: responseJson});
           const theList=this.calculateLevels();

           return theList;
        }

    };
    whatLevel=points=>{
        let level= null;

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
        }

        return level;

    };

    calculateLevels=()=>{

        if(this.state.userlist!==null){
            const theUsers= this.state.userlist.map(user=>{
                    const theLevels=this.whatLevel(user.points);
                    return {
                        name: user.name,
                        points: user.points,
                        level: theLevels
                    }
            });
            const sorted=theUsers.sort(function(a,b){
                return (b.level) - (a.level);
            });
            return sorted;
        }else{
            return null;
        }

    }
}