import React from "react";
import { View } from "react-native";
import styles from "utils/styles";

import Btn from "components/Btn";
import Header from "components/Header";

const Welcome = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Header>Welcome</Header>
      <Btn onPress={() => navigation.navigate("Entropy")} title="Get started" />
      <Btn
        onPress={() => navigation.navigate("Recovery")}
        title="Need restore?"
        type="secondary"
      />
    </View>
  );
};

export default Welcome;
