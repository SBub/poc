import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Onboarding from "./Onboarding";
import Entropy from "./Entropy";
import Recovery from "./Recovery";

const Stack = createStackNavigator();

const NotIdentifiedStack = () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Onboarding" component={Onboarding} />
      <Stack.Screen name="Entropy" component={Entropy} />
      <Stack.Screen name="Recovery" component={Recovery} />
    </Stack.Navigator>
  );
};

export default NotIdentifiedStack;
