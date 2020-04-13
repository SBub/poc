import React from "react";
import { View } from "react-native";
import styles from "utils/styles";

import Header from "components/Header";
import Btn from "components/Btn";

const Scanner = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Header>Scanner</Header>
      <Btn
        title="Parse Token"
        onPress={() => navigation.navigate("InteractionServices")}
      />
    </View>
  );
};

export default Scanner;
