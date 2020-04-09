import React from "react";
import { View } from "react-native";

import styles from "utils/styles";

import Header from "components/Header";
import Btn from "components/Btn";

const SeedPhrasePreview = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Header>Seed Phrase Preview</Header>
      <Btn
        title="Done"
        onPress={() => navigation.navigate("RepeatSeedPhrase")}
      />
    </View>
  );
};

export default SeedPhrasePreview;
