import React from 'react'
import {Button, View, StyleSheet} from 'react-native'

import BasicScreen from '../Components/BasicScreen'

export default (props: any) => {
    return(
        <BasicScreen screenName = 'Drawer Screen 2' >
            <Button title="Togle Drawer" onPress={()=>props.navigation.toggleDrawer()}/>
        </BasicScreen>
    )
}