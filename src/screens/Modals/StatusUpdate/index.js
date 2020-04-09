import React, { useEffect } from "react";
import { View } from "react-native";

import styles from "utils/styles";
import Paragraph from "components/Paragraph";

const StatusUpdate = ({ navigation }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate("Authentication");
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      <Paragraph color="white">Verification on server...</Paragraph>
    </View>
  );
};

export default StatusUpdate;
