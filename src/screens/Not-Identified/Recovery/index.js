import React from "react";
import { View } from "react-native";
import styles from "utils/styles";

import Header from "components/Header";
import Btn from "components/Btn";

import { useStatusDispatch } from "modules/status/context";

const Recovery = ({ navigation }) => {
  const dispatch = useStatusDispatch();

  const recoverIdentity = () => {
    try {
      dispatch({ type: "UPDATE", payload: "Verification on server" });
    } catch (err) {
      dispatch({ type: "UPDATE", payload: "Verification failed" });
    } finally {
      setTimeout(() => {
        dispatch({ type: "RESET" });
        navigation.navigate("Authentication");
      }, 3000);
    }
  };

  return (
    <View style={styles.container}>
      <Header>Recovery</Header>
      <Btn title="Recover Identity" onPress={recoverIdentity} />
      <Btn type="secondary" title="Back" onPress={navigation.goBack} />
    </View>
  );
};

export default Recovery;
