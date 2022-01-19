import * as React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import {PointList} from './screens/PointList';
import {Marcador} from './screens/Marcador';
import {Provider} from 'react-redux';
import {Store} from './redux/store';
import {Licenca} from './screens/Licenca';
import 'react-native-gesture-handler';
const Drawer = createDrawerNavigator();

export default () => {
  return (
    <Provider store={Store}>
      <NavigationContainer>
        <Drawer.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerTitleAlign: 'center',
            headerTintColor: '#fff3e6',
            headerStyle: {
              backgroundColor: '#800000',
            },
            drawerStyle: {backgroundColor: '#fff3e6'},
          }}>
          <Drawer.Screen
            name="Marcador"
            component={Marcador}
            options={{
              drawerActiveTintColor: '#800000',
              drawerLabelStyle: {fontSize: 30, color: '#800000'},
            }}
          />
          <Drawer.Screen
            name="Log Pontuação"
            component={PointList}
            options={{
              drawerActiveTintColor: '#800000',
              drawerLabelStyle: {fontSize: 30, color: '#800000'},
            }}
          />
          <Drawer.Screen
            name="Licença"
            component={Licenca}
            options={{
              drawerActiveTintColor: '#800000',
              drawerLabelStyle: {fontSize: 30, color: '#800000'},
            }}
          />
        </Drawer.Navigator>
      </NavigationContainer>
    </Provider>
  );
};
