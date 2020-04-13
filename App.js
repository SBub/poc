import React from "react";

import ErrorBoundary from "src/ErrorBoundary";
import RootNavigation from "src/screens";
import StatusProvider from "src/modules/status/context";
import AuthProvider from "src/modules/auth/context";

const App = () => {
  return (
    <ErrorBoundary>
      <StatusProvider>
        <AuthProvider>
          <RootNavigation />
        </AuthProvider>
      </StatusProvider>
    </ErrorBoundary>
  );
};

export default App;
