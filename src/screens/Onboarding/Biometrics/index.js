import React from "react";
import { View } from "react-native";

import styles from "utils/styles";

import Header from "components/Header";
import Btn from "components/Btn";

const Biometrics = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Header>Biometrics detected</Header>
      <Btn
        title="Preview seed phase"
        onPress={() => navigation.navigate("SeedPhrasePreview")}
      />
    </View>
  );
};

export default Biometrics;
