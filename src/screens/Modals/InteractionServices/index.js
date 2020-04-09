import React from "react";
import { View } from "react-native";

import styles from "utils/styles";
import Header from "components/Header";
import Paragraph from "components/Paragraph";

const InteractionServices = () => {
  return (
    <View style={[styles.container, { backgroundColor: "white" }]}>
      <Header>Interaction Services</Header>
      <Paragraph>Pull down to dismiss</Paragraph>
    </View>
  );
};

export default InteractionServices;
