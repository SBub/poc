import React from "react";
import { View } from "react-native";

import styles from "utils/styles";

import Header from "components/Header";
import Btn from "components/Btn";

const RepeatSeedPhrase = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Header>Repeat Seed Phrase</Header>
      <Btn
        title="Its correct now"
        onPress={() => navigation.navigate("LoggedIn")}
      />
    </View>
  );
};

export default RepeatSeedPhrase;
