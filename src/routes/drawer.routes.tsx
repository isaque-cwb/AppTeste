import { createDrawerNavigator } from '@react-navigation/drawer'
import { House } from 'phosphor-react-native'
import { TabRoutes } from './tab.routes'


const { Navigator, Screen } = createDrawerNavigator()

export function DrawerRoutes() {
    return (
        <Navigator screenOptions={{ title: '' }} >
            <Screen
                name='home'
                component={TabRoutes}
                options={{
                    drawerIcon: ({ color, size }) => <House color={color} size={size} />,
                    drawerLabel: 'Início',
                    drawerLabelStyle: {
                        fontSize: 13
                    }
                }}
            />
        </Navigator>
    )
}