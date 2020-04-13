import { useEffect } from "react";
import { AsyncStorage } from "react-native";

import { useAuthState, useAuthDispatch } from "./context";

const useAuth = () => {
  const { authAttempted, did } = useAuthState();
  const dispatch = useAuthDispatch();

  useEffect(() => {
    const getDid = async () => {
      try {
        const did = await AsyncStorage.getItem("did");
        dispatch({
          type: "AUTH_CHANGE",
          payload: did || null,
        });
      } catch (e) {
        dispatch({
          type: "AUTH_CHANGE",
          auth: null,
        });
      }
    };

    getDid();
  }, [dispatch]);

  return { authAttempted, did };
};

export default useAuth;
