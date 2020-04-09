import React from "react";
import { View, Text } from "react-native";

class ErrorBoundary extends React.Component {
  state = {
    hasError: false,
  };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <View style={styles.containerr}>
          <Text>An error occured</Text>
        </View>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
