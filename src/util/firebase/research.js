const RESEARCH_PROJECTS_FIRESTORE_COLLECTION = "research";
var projectsUnsubscriber;

/**
 *  Stops listening to changes concerning the research projects
 */
export function unsubscribeResearch() {
  if (projectsUnsubscriber) {
    projectsUnsubscriber();
    projectsUnsubscriber = null;
  }
}

/**
 * Populates the given array with all of the research-project objects & automatically
 * updates the entire array every time the projects collection changes (a project is added or removed)
 *
 * @param {*} firestore The cqg-website Firestore object
 * @param {*} educationBoard The array to populate
 */
export function subscribeResearch(firestore, researchProjects) {
  if (!projectsUnsubscriber) {
    projectsUnsubscriber = createSubscription(firestore, researchProjects);
  }
}

function createSubscription(firestore, projects) {
  return firestore
    .collection(RESEARCH_PROJECTS_FIRESTORE_COLLECTION)
    .onSnapshot(querySnapshot => updateProjects(querySnapshot, projects));
}

function updateProjects(querySnapshot, projects) {
  flush(projects);
  querySnapshot.forEach(doc => {
    const projectInfo = doc.data();
    projects.push(projectInfo);
  });
}

// Empties out a given array
function flush(array) {
  array.length = 0;
}
