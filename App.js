import React from "react";

import ErrorBoundary from "src/ErrorBoundary";
import RootNavigation from "src/screens";
import StatusProvider from "src/modules/status/context";

const App = () => {
  return (
    <ErrorBoundary>
      <StatusProvider>
        <RootNavigation />
      </StatusProvider>
    </ErrorBoundary>
  );
};

export default App;
