const EDUCATION_INITATIVES_FIRESTORE_COLLECTION = "education";
var initiativesUnsubscriber;

/**
 *  Stops listening to changes concerning the education initiatives
 */
export function unsubscribeEducation() {
  if (initiativesUnsubscriber) {
    initiativesUnsubscriber();
    initiativesUnsubscriber = null;
  }
}

/**
 * Populates the given array with all of the education-initiative objects & automatically
 * updates the entire array every time the education collection changes (an initiative is added or removed)
 *
 * @param {*} firestore The cqg-website Firestore object
 * @param {*} educationBoard The array to populate
 */
export function subscribeEducation(firestore, educationInitiatives) {
  if (!initiativesUnsubscriber) {
    initiativesUnsubscriber = createSubscription(
      firestore,
      educationInitiatives
    );
  }
}

function createSubscription(firestore, initiatives) {
  return firestore
    .collection(EDUCATION_INITATIVES_FIRESTORE_COLLECTION)
    .onSnapshot(querySnapshot => updateProjects(querySnapshot, initiatives));
}

function updateProjects(querySnapshot, initiatives) {
  flush(initiatives);
  querySnapshot.forEach(doc => {
    const initiativeInfo = doc.data();
    initiatives.push(initiativeInfo);
  });
}

// Empties out a given array
function flush(array) {
  array.length = 0;
}
