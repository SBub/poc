import React, { useRef, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import NotIdentifiedStack from "./Not-Identified";
import AuthenticationStack from "./Authentication";
import IdentifiedTabs from "./Identified";
import StatusUpdate from "./Modals/StatusUpdate";
import InteractionServices from "./Modals/InteractionServices";

import { useStatus } from "modules/status/context";
import useAuth from "modules/auth/useAuth";

const RootStack = createStackNavigator();

const useStatusListener = () => {
  const ref = useRef(null);
  const status = useStatus();

  useEffect(() => {
    if (ref.current) {
      if (status) {
        ref.current.navigate("StatusUpdate");
      }
    }
  }, [status]);

  return ref;
};

const RootNavigation = () => {
  const ref = useStatusListener();

  const { authAttempted, did } = useAuth();

  if (!authAttempted) return null;

  return (
    <NavigationContainer ref={ref}>
      <RootStack.Navigator headerMode="none" mode="modal">
        {did ? (
          <>
            <RootStack.Screen name="Identified" component={IdentifiedTabs} />
            <RootStack.Screen
              name="Authentication"
              component={AuthenticationStack}
            />
          </>
        ) : (
          <RootStack.Screen
            name="NotIdentified"
            component={NotIdentifiedStack}
          />
        )}
        <RootStack.Screen
          name="StatusUpdate"
          component={StatusUpdate}
          options={{
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
                  outputRange: [0, 0.75],
                  extrapolate: "clamp",
                }),
              },
            }),
          }}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigation;
