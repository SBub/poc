import React from "react";
import { TouchableOpacity, StyleSheet, Text } from "react-native";

const Btn = ({ onPress, title, type = "primary" }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.container, type === "primary" && styles.primary]}
    >
      <Text>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
    paddingHorizontal: 26,
    paddingVertical: 16,
    marginTop: 20,
    width: "80%",
    alignItems: "center",
  },
  primary: {
    backgroundColor: "rgb(210,45,105)",
  },
});

export default Btn;
