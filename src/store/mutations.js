import stateVars from "./state.js";

export default genSetters(stateVars);

function genSetters(stateVars) {
  const setters = {};
  for (let key in stateVars) {
    setters[key] = (state, newVal) => {
      state[key] = newVal;
    };
  }
  return setters;
}
