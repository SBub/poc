const initialState = {
  authAttempted: false,
  did: null,
};

const authReducer = (state, action) => {
  switch (action.type) {
    case "AUTH_CHANGE": {
      return {
        ...state,
        did: action.payload,
        authAttempted: true,
      };
    }
    default:
      return state;
  }
};

export { initialState, authReducer as default };
