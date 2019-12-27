import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import QR_CODE from '../Components/QR_CODE';

const QR_CODE_Screen = props => {
    return (
            <QR_CODE
                onValidation={()=>props.navigation.navigate('MissionCompleted')}
            />
    )
}

export default QR_CODE_Screen;
