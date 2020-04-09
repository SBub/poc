import React from "react";

import ErrorBoundary from "src/ErrorBoundary";
import RootNavigation from "./src/screens";

const App = () => {
  return (
    <ErrorBoundary>
      <RootNavigation />
    </ErrorBoundary>
  );
};

export default App;
