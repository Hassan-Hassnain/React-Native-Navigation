import React from 'react'
import {Button} from 'react-native'
import BasicScreen from '../Components/BasicScreen'

export default (props: any) => {
    const gotoDetails = () => {
        props.navigation.navigate("Details")
    }
    return(
        <BasicScreen screenName = 'Home Screen'>
            <Button title="Goto Details" onPress={gotoDetails} />
        </BasicScreen>
    )
}
