import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "./pages/Home";
import CreateAccount from "./pages/CreateAccount";
import Points from "./pages/Points";
import Detail from "./pages/Detail";
import Perfil from "./pages/Perfil";

const AppStack = createStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <AppStack.Navigator
        headerMode="none"
        screenOptions={{
          cardStyle: {
            backgroundColor: "#f0f0f5",
          },
        }}
      >
        <AppStack.Screen name="Home" component={Home} />
        <AppStack.Screen name="CreateAccount" component={CreateAccount} />
        <AppStack.Screen name="Points" component={Points} />
        <AppStack.Screen name="Detail" component={Detail} />
        <AppStack.Screen name="Perfil" component={Perfil} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
