const initialState = null;

const reducer = (state, action) => {
  switch (action.type) {
    case "UPDATE":
      return action.payload;
    case "RESET":
      return initialState;
    default:
      return state;
  }
};

export { initialState, reducer as default };
