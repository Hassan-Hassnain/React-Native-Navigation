import React from 'react'
import {Button} from 'react-native'
import BasicScreen from '../Components/BasicScreen'

export default (props: any) => {
    const gotoHome = () => {
        props.navigation.navigate("Home")
    }
    return(
        <BasicScreen screenName = 'Botton Tab Screen'>
            <Button title="Goto Home" onPress={gotoHome} />
        </BasicScreen>
    )
}