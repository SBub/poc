import React from "react";
import { View } from "react-native";

import styles from "utils/styles";
import Paragraph from "components/Paragraph";

const StatusUpdate = () => {
  return (
    <View style={styles.container}>
      <Paragraph color="white">Verification on server...</Paragraph>
    </View>
  );
};

export default StatusUpdate;
