import React from 'react';
import {Container} from 'unstated'
import {Alert} from 'react-native';

//This container is used to calculate the route of the transport mission
//for that it uses the Google API where the parameters are set to mode=transit, so that
//it shows routes with public transportation.
export default class TransportationContainer extends Container {

    //calls the Google API and returns a list of routes that were found for this orgin and
    //destination by means of public transport.
    calculateRoute = async (origin, destination) => {
        const response = await fetch('https://maps.googleapis.com/maps/api/directions/json?origin=' + origin + '&destination=' + destination + '&departure_time=&mode=transit&key=AIzaSyDnOaaU_CIxZxa45NcrN0G2Nzl7xVTKFdA');
        const theRoute = await response.json();


        if (theRoute.status === 'NOT_FOUND') {
            Alert.alert('No Route has been found for your places.Please do not mix Italian with German :) and try again!')
            return null;
        } else if (theRoute.status === 'ZERO_RESULTS') {
            Alert.alert('Unfortunately no results could be found for your trip :(')
            return null;
        } else {


            const convertedRoutes = theRoute.routes.map(apiRoute => {
                const innerRoute = apiRoute.legs.map(route => {
                    return {
                        arrival: route.arrival_time? route.arrival_time.text:'',
                        departure: route.departure_time? route.departure_time.text:'',
                        distance: route.distance? route.distance.text:'',
                        duration: route.duration? route.duration.text: '',
                        routes: route.steps.map(steps => {
                            if (steps.travel_mode === 'TRANSIT') {
                                return {
                                    instructions: steps.html_instructions,
                                    travelmode: steps.travel_mode,
                                    details: steps.transit_details.line.name
                                }
                            } else {
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


}
