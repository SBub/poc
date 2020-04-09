import React from "react";
import { View } from "react-native";

import styles from "utils/styles";

import Header from "components/Header";
import Paragraph from "components/Paragraph";
import Btn from "components/Btn";

const PasscodeCreation = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Header>Creating passcode</Header>
      <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </Paragraph>
      <Btn
        onPress={() => navigation.navigate("Biometrics")}
        title="Go to biometrics"
      />
    </View>
  );
};

export default PasscodeCreation;
