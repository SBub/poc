import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Welcome from "./Welcome";
import Entropy from "./Entropy";
import Recovery from "./Recovery";

const Stack = createStackNavigator();

const NotIdentifiedStack = () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="Entropy" component={Entropy} />
      <Stack.Screen name="Recovery" component={Recovery} />
    </Stack.Navigator>
  );
};

export default NotIdentifiedStack;
