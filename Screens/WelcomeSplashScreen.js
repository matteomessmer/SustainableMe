import React from 'react';
import WelcomeSplash from '../Components/WelcomeSplash';

//screen to call the splash component. It only passes a navigation callback, which is called when the timer has expired.
const WelcomeSplashScreen = props => {
    return (

        <WelcomeSplash
            onTimeOut={() => props.navigation.navigate('Login')}
        />

    )
}

export default WelcomeSplashScreen;
