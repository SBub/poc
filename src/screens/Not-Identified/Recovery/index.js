import React from "react";
import { View } from "react-native";
import styles from "utils/styles";

import Header from "components/Header";
import Btn from "components/Btn";

const Recovery = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Header>Recovery</Header>
      <Btn title="Recover Identity" onPress={() => {}} />
      <Btn type="secondary" title="Back" onPress={navigation.goBack} />
    </View>
  );
};

export default Recovery;
