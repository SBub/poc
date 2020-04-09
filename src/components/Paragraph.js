import React from "react";
import { Text } from "react-native";

const Paragraph = ({ children, color = "black" }) => {
  return <Text style={{ color: color, marginTop: 10 }}>{children}</Text>;
};

export default Paragraph;
