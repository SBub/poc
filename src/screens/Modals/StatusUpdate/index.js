import React, { useEffect } from "react";
import { View } from "react-native";

import styles from "utils/styles";
import Paragraph from "components/Paragraph";
import { useStatus } from "modules/status/context";

const StatusUpdate = () => {
  const status = useStatus();

  return (
    <View style={styles.container}>
      <Paragraph color="white">{status}</Paragraph>
    </View>
  );
};

export default StatusUpdate;
