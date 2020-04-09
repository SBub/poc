import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import ErrorBoundary from "src/ErrorBoundary";
import NotIdentifiedStack from "src/screens/Not-Identified";

const App = () => {
  return (
    <ErrorBoundary>
      <NavigationContainer>
        <NotIdentifiedStack />
      </NavigationContainer>
    </ErrorBoundary>
  );
};

export default App;
