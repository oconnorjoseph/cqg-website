const DATATHON_FIRESTORE_COLLECTION = "datathon";
const RANK_FIELD_NAME = "rank";
const LOGO_STORAGE_FOLDER = "logo";

var datathonsUnsubscriber;

/**
 * Asynchronously returns the download URL for the logo with the given file name
 * (in the logo folder of Firebase Storage)
 * @param {*} firebaseStorage The cqg-website Firebase Storage object
 * @param {*} logoName The file name of the logo
 */
export async function fetchLogoURL(firebaseStorage, logoName) {
  const storageRef = firebaseStorage.ref();
  const logoRef = storageRef.child(LOGO_STORAGE_FOLDER).child(logoName);
  return await logoRef.getDownloadURL();
}

/**
 * Stops listening to changes concerning the datathons
 * NOTE: Will not try to unsubscribe if not already subscribed
 */
export function unsubscribeDatathons() {
  if (datathonsUnsubscriber) {
    datathonsUnsubscriber();
    datathonsUnsubscriber = null;
  }
}

/**
 * Populates the given array with all of the datathon objects & automatically updates the entire array every
 * time the datathons changes (a datathon is added or removed)
 *
 * @param {*} firestore The cqg-website Firestore object
 * @param {*} datathons The array to populate
 */
export function subscribeDatathons(firestore, datathons) {
  if (!datathonsUnsubscriber) {
    datathonsUnsubscriber = createSubscription(firestore, datathons);
  }
}

function createSubscription(firestore, datathons) {
  return firestore
    .collection(DATATHON_FIRESTORE_COLLECTION)
    .onSnapshot(querySnapshot => updateDatathons(querySnapshot, datathons));
}

function updateDatathons(querySnapshot, datathons) {
  flush(datathons);
  querySnapshot.forEach(doc => {
    const datathon = doc.data();
    datathons.push(datathon);
  });
  datathons.sort((a, b) => a[RANK_FIELD_NAME] - b[RANK_FIELD_NAME]);
}

// Empties out a given array
function flush(array) {
  array.length = 0;
}
