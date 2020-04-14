import React from "react";
import { View, AsyncStorage } from "react-native";
import styles from "utils/styles";

import { useAuthDispatch } from "modules/auth/context";

import Header from "components/Header";
import Btn from "components/Btn";

const Settings = ({ navigation }) => {
  const dispatchToAuth = useAuthDispatch();
  const removeStoredDid = async () => {
    await AsyncStorage.removeItem("did");

    dispatchToAuth({ type: "AUTH_CHANGE", payload: null });
    navigation.navigate("LoggedOut");
  };
  return (
    <View style={styles.container}>
      <Header>Settings</Header>
      <Btn title="Remove did from storage" onPress={removeStoredDid} />
    </View>
  );
};

export default Settings;
