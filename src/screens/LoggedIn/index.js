import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Identities from "./Identities";
import Documents from "./Documents";
import History from "./History";
import Settings from "./Settings";

const Tab = createBottomTabNavigator();

const IdentifiedTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Identities" component={Identities} />
      <Tab.Screen name="Documents" component={Documents} />
      <Tab.Screen name="History" component={History} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  );
};

export default IdentifiedTabs;
