import { INTERNAL_DATATHON_NAME } from "../util/firebase/alert";

export default {
  hasInternalDatathonAlert(_state, getters) {
    return (
      getters.internalDatathonDeadline &&
      getters.internalDatathonDeadline > Date.now()
    );
  },
  internalDatathonDeadline(state) {
    if (state[INTERNAL_DATATHON_NAME]) {
      return state[INTERNAL_DATATHON_NAME].deadline;
    } else {
      return 0;
    }
  }
};
