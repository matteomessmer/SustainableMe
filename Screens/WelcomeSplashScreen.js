import React from 'react';
import WelcomeSplash from '../Components/WelcomeSplash';

const WelcomeSplashScreen = props => {
    return (

        <WelcomeSplash
            onTimeOut={()=>props.navigation.navigate('Login')}
        />

    )
}

export default WelcomeSplashScreen;
