import React from "react";
import { View, AsyncStorage } from "react-native";
import styles from "utils/styles";

import Header from "components/Header";
import Btn from "components/Btn";

import { useStatusDispatch } from "modules/status/context";
import { useAuthDispatch } from "modules/auth/context";

import API from "utils/api";

const Recovery = ({ navigation }) => {
  const dispatchToStatus = useStatusDispatch();
  const dispatchToAuth = useAuthDispatch();

  const recoverIdentity = async () => {
    dispatchToStatus({ type: "UPDATE", payload: "Verification on server" });

    try {
      const did = await API.recoverIdentity();

      await AsyncStorage.setItem("did", did);

      dispatchToAuth({ type: "AUTH_CHANGE", payload: did });
      navigation.navigate("Authentication");

      dispatchToStatus({ type: "RESET" });
    } catch (err) {
      dispatchToStatus({ type: "UPDATE", payload: err });
      setTimeout(() => {
        navigation.navigate("NotIdentified");

        dispatchToStatus({ type: "RESET" });
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
