import React from "react";
import { View } from "react-native";
import styles from "utils/styles";

import Btn from "components/Btn";
import Header from "components/Header";

const Onboarding = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Header>Onboarding</Header>
      <Btn onPress={() => navigation.navigate("Entropy")} title="Get started" />
      <Btn
        onPress={() => navigation.navigate("Recovery")}
        title="Need restore?"
        type="secondary"
      />
    </View>
  );
};

export default Onboarding;
