export const INTERNAL_DATATHON_NAME = "internal-datathon";

const ALERTS_FIRESTORE_COLLECTION = "alert";
var alertsUnsubscriber;

/**
 *  Stops listening to changes concerning the alerts
 */
export function unsubscribeAlerts() {
  if (alertsUnsubscriber) {
    alertsUnsubscriber();
    alertsUnsubscriber = null;
  }
}

/**
 * Populates the Vuex store with any alerts &
 * updates the store every time the alerts collection changes (an alert is rescheduled, added, or removed)
 *
 * @param {*} firestore The cqg-website Firestore object
 * @param {*} store The Vuex store instance
 */
export function subscribeAlerts(firestore, store) {
  if (!alertsUnsubscriber) {
    alertsUnsubscriber = createSubscription(firestore, store);
  }
}

function createSubscription(firestore, store) {
  return firestore
    .collection(ALERTS_FIRESTORE_COLLECTION)
    .onSnapshot(querySnapshot => updateAlerts(querySnapshot, store));
}

function updateAlerts(querySnapshot, store) {
  querySnapshot.forEach(doc => {
    const alertInfo = doc.data();
    store.commit(doc.id, alertInfo);
  });
}
