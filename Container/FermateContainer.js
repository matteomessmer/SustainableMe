import React from 'react';
import {Container} from 'unstated'


export default class ArticleContainer extends Container {
    state = {
        fermate: require('./fermate.json'),
    }

    calculateRoute = async (origin, destination) => {
        const response = await fetch('https://maps.googleapis.com/maps/api/directions/json?origin=' + origin + '&destination=' + destination + '&departure_time=&mode=transit&key=AIzaSyDnOaaU_CIxZxa45NcrN0G2Nzl7xVTKFdA');
        const theRoute = await response.json();


        const convertedRoutes = theRoute.routes.map(apiRoute => {
            const innerRoute = apiRoute.legs.map(route => {
                return {
                    arrival: route.arrival_time.text,
                    departure: route.departure_time.text,
                    distance: route.distance.text,
                    duration: route.duration.text,
                    routes: route.steps.map(steps => {
                        if(steps.travel_mode==='TRANSIT'){
                            return {
                                instructions: steps.html_instructions,
                                travelmode: steps.travel_mode,
                                details: steps.transit_details.line.name
                            }
                        }else {
                            return {
                                instructions: steps.html_instructions,
                                distance: steps.distance.text,
                                duration: steps.duration.text,
                            }

                        }


                    }),


                }
            });
            return innerRoute;
        });
        return convertedRoutes;

    }


}


