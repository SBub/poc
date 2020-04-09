import React from "react";
import { Text, StyleSheet } from "react-native";

const Header = ({ children }) => {
  return <Text style={styles.header}>{children}</Text>;
};

const styles = StyleSheet.create({
  header: {
    fontSize: 25,
    color: "black",
  },
});

export default Header;
