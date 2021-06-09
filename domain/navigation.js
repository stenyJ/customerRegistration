import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import CustomerRegistration from './customerRegistration';
import PreviewScreen from './previewCustomerReg'

function Navigation() {

    const Stack = createStackNavigator();

    return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="CustomerRegistration">
        <Stack.Screen name="customerRegistration" component={CustomerRegistration} />
        <Stack.Screen name="preview" component={PreviewScreen} />
      </Stack.Navigator>
    </NavigationContainer>
    )
}

export default Navigation;