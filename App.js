import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import ErrorBoundary from "src/ErrorBoundary";

import NotIdentifiedStack from "src/screens/Not-Identified";
import AuthenticationStack from "src/screens/Authentication";
import StatusUpdate from "src/screens/Modals/StatusUpdate";

const RootStack = createStackNavigator();

const App = () => {
  return (
    <ErrorBoundary>
      <NavigationContainer>
        <RootStack.Navigator
          headerMode="none"
          mode="modal"
          screenOptions={{
            cardStyle: { backgroundColor: "transparent" },
            cardOverlayEnabled: true,
            cardStyleInterpolator: ({ current: { progress } }) => ({
              cardStyle: {
                opacity: progress.interpolate({
                  inputRange: [0, 0.5, 0.9, 1],
                  outputRange: [0, 0.25, 0.7, 1],
                }),
              },
              overlayStyle: {
                opacity: progress.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, 0.95],
                  extrapolate: "clamp",
                }),
              },
            }),
          }}
        >
          <RootStack.Screen
            name="NotIdentified"
            component={NotIdentifiedStack}
          />
          <RootStack.Screen
            name="Authentication"
            component={AuthenticationStack}
          />
          <RootStack.Screen name="StatusUpdate" component={StatusUpdate} />
        </RootStack.Navigator>
      </NavigationContainer>
    </ErrorBoundary>
  );
};

export default App;
