import React, { useRef, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import LoggedOut from "./LoggedOut";
import LoggedIn from "./LoggedIn";
import Onboarding from "./Onboarding";
import StatusUpdate from "./Modals/StatusUpdate";

import { useStatus } from "modules/status/context";
import useAuth from "modules/auth/useAuth";

import { modalScreenOptions } from "utils/styles";

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
      <RootStack.Navigator
        headerMode="none"
        mode="modal"
        screenOptions={modalScreenOptions}
      >
        {did ? (
          <>
            <RootStack.Screen name="LoggedIn" component={LoggedIn} />
            <RootStack.Screen name="Onboarding" component={Onboarding} />
          </>
        ) : (
          <RootStack.Screen name="LoggedOut" component={LoggedOut} />
        )}
        <RootStack.Screen name="StatusUpdate" component={StatusUpdate} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigation;
