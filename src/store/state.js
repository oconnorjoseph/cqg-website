import {
  firebase,
  firestore,
  firebaseFunctions,
  firebaseStorage
} from "../util/firebase/index.js";

import { INTERNAL_DATATHON_NAME } from "../util/firebase/alert.js";

const state = {
  firebase: firebase,
  firestore: firestore,
  firebaseFunctions: firebaseFunctions,
  firebaseStorage: firebaseStorage
};
state[INTERNAL_DATATHON_NAME] = null;
export default state;
