export const EDUCATION_FIELD_NAME = "educationRole";
export const RESEARCH_FIELD_NAME = "researchRole";
export const EXECUTIVE_FIELD_NAME = "executiveRole";
export const BOARD_GROUPS = [
  EXECUTIVE_FIELD_NAME,
  RESEARCH_FIELD_NAME,
  EDUCATION_FIELD_NAME
];

const BOARD_FIRESTORE_COLLECTION = "board";
const FIRESTORE_GREATER_THAN_OPERATOR = ">=";
const RANK_FIELD_NAME = "rank";
const BOARD_STORAGE_FOLDER = "board";
const HEADSHOT_STORAGE_FOLDER = "headshot";

var boardUnsubscribers = {};

/**
 * Asynchronously returns the download URL for the headshot image with the given file name
 * (in the board/headshot folder of Firebase Storage)
 * @param {*} firebaseStorage The cqg-website Firebase Storage object
 * @param {*} headshotImgName The file name of the headshot image
 */
export async function fetchHeadshotURL(firebaseStorage, headshotImgName) {
  const storageRef = firebaseStorage.ref();
  const headshotRef = storageRef
    .child(BOARD_STORAGE_FOLDER)
    .child(HEADSHOT_STORAGE_FOLDER)
    .child(headshotImgName);
  return await headshotRef.getDownloadURL();
}

/**
 * Stops listening to changes concerning the education board
 * NOTE: Will not try to unsubscribe if not already subscribed
 */
export function unsubscribeEducationBoard() {
  unsubscribeBoard(EDUCATION_FIELD_NAME);
}

/**
 * Stops listening to changes concerning the research board
 * NOTE: Will not try to unsubscribe if not already subscribed
 */
export function unsubscribeResearchBoard() {
  unsubscribeBoard(RESEARCH_FIELD_NAME);
}

/**
 * Stops listening to changes concerning the executive board
 * NOTE: Will not try to unsubscribe if not already subscribed
 */
export function unsubscribeExecutiveBoard() {
  unsubscribeBoard(EXECUTIVE_FIELD_NAME);
}

/**
 *  Stops listening to changes concerning the given board
 * @param {*} groupField EDUCATION_FIELD_NAME, RESEARCH_FIELD_NAME, or EXECUTIVE_FIELD_NAME
 */
export function unsubscribeBoard(groupField) {
  if (boardUnsubscribers[groupField]) {
    boardUnsubscribers[groupField]();
    boardUnsubscribers[groupField] = null;
  }
}

/**
 * Populates the given array with all of the education-board-member objects & automatically updates the entire array every
 * time the education board changes (a member is added or removed)
 *
 * @param {*} firestore The cqg-website Firestore object
 * @param {*} educationBoard The array to populate
 */
export function subscribeEducationBoard(firestore, educationBoard) {
  subscribeBoard(firestore, EDUCATION_FIELD_NAME, educationBoard);
}

/**
 * Populates the given array with all of the research-board-member objects & automatically updates the entire array every
 * time the research board changes (a member is added or removed)
 *
 * @param {*} firestore The cqg-website Firestore object
 * @param {*} researchBoard The array to populate
 */
export function subscribeResearchBoard(firestore, researchBoard) {
  subscribeBoard(firestore, RESEARCH_FIELD_NAME, researchBoard);
}

/**
 * Populates the given array with all of the executive-board-member objects & automatically updates the entire array every
 * time the executive board changes (a member is added or removed)
 *
 * @param {*} firestore The cqg-website Firestore object
 * @param {*} executiveBoard The array to populate
 */
export function subscribeExecutiveBoard(firestore, executiveBoard) {
  subscribeBoard(firestore, EXECUTIVE_FIELD_NAME, executiveBoard);
}

/**
 * Populates the given array with all of the member objects of the board with the given groupField
 * & automatically updates the entire array every time the board changes (a member is added or removed)
 *
 * @param {*} firestore The cqg-website Firestore object
 * @param {*} groupField EDUCATION_FIELD_NAME, RESEARCH_FIELD_NAME, or EXECUTIVE_FIELD_NAME
 * @param {*} educationBoard The array to populate
 */
export function subscribeBoard(firestore, groupField, board) {
  if (!boardUnsubscribers[groupField]) {
    boardUnsubscribers[groupField] = createSubscription(
      firestore,
      groupField,
      board
    );
  }
}

function createSubscription(firestore, groupField, board) {
  return firestore
    .collection(BOARD_FIRESTORE_COLLECTION)
    .where(groupField, FIRESTORE_GREATER_THAN_OPERATOR, "")
    .onSnapshot(querySnapshot => updateBoard(querySnapshot, board));
}

function updateBoard(querySnapshot, board) {
  flush(board);
  querySnapshot.forEach(doc => {
    const boardMemberInfo = doc.data();
    board.push(boardMemberInfo);
  });
  board.sort((a, b) => a[RANK_FIELD_NAME] - b[RANK_FIELD_NAME]);
}

// Empties out a given array
function flush(array) {
  array.length = 0;
}
