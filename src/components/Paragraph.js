import React from "react";
import { Text } from "react-native";

const Paragraph = ({ children, color = "black" }) => {
  return <Text style={{ color: color }}>{children}</Text>;
};

export default Paragraph;
