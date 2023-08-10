import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Feed from '../screens/Feed'
import New from '../screens/New'
import { House, Plus } from 'phosphor-react-native'


const { Navigator, Screen } = createBottomTabNavigator()

export function TabRoutes() {
    return (
        <Navigator screenOptions={{ headerShown: false }} >
            <Screen
                name='feed'
                component={Feed}
                options={{
                    tabBarIcon: ({ color, size }) => <House color={color} size={size} />,
                    tabBarLabel: 'Feed',
                    tabBarLabelStyle: {
                        fontSize: 13
                    }
                }}
            />
            <Screen
                name='new'
                component={New}
                options={{
                    tabBarIcon: ({ color, size }) => <Plus color={color} size={size} />,
                    tabBarLabel: 'New',
                    tabBarLabelStyle: {
                        fontSize: 13
                    }
                }}
            />
        </Navigator>
    )
}