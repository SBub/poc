import React from "react";
import { View } from "react-native";
import styles from "utils/styles";

import Header from "components/Header";
import Btn from "components/Btn";

const Entropy = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Header>Entropy</Header>
      <Btn title="Create identity" onPress={() => {}} />
      <Btn type="secondary" title="Back" onPress={navigation.goBack} />
    </View>
  );
};

export default Entropy;
