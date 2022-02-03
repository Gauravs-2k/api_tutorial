import React from 'react'
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation'
import DetailsScreen from '../Screens/DetailsScreen';
import SearchingScreen from '../Screens/SearchingScreen'
import { NavigationContainer } from '@react-navigation/native';


const RootStack = createStackNavigator({
    Search: {
        screen: SearchingScreen,
    },
    Details: {
        screen: DetailsScreen,
    },
})

const AppNav = createAppContainer(RootStack)

// const Stack = createStackNavigator()

// function AppNav() {
//     return (
//         <NavigationContainer>
//             <Stack.Navigator>
//                 <Stack.Screen name="Search" component={SearchingScreen} options={{ title: 'SearchingScreen' }} />
//                 <Stack.Screen name="Details" component={DetailsScreen} options={{ title: 'DetailsScreen' }} />
//             </Stack.Navigator>
//         </NavigationContainer>
//     )
// }

export default AppNav