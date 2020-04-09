import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import PasscodeCreation from "./PasscodeCreation";
import Biometrics from "./Biometrics";
import SeedPhrasePreview from "./SeedPhrasePreview";
import RepeatSeedPhrase from "./RepeatSeedPhrase";

const Stack = createStackNavigator();

const AuthenticationStack = () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="PasscodeCreation" component={PasscodeCreation} />
      <Stack.Screen name="Biometrics" component={Biometrics} />
      <Stack.Screen name="SeedPhrasePreview" component={SeedPhrasePreview} />
      <Stack.Screen name="RepeatSeedPhrase" component={RepeatSeedPhrase} />
    </Stack.Navigator>
  );
};

export default AuthenticationStack;
