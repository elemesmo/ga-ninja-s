import admin from "firebase-admin";
import serviceAccount from "../../../ga-ninja-firebase-adminsdk-jlnlz-60026aeed8.json";

/** initilize firebase admin */
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://ga-ninja.firebaseio.com",
});

export async function get(req, res, next) {
  let firestore = admin.firestore();
  let projectsCollection = firestore.collection("Projects");
  let projectsSnapshot = await projectsCollection.where("published", "==", true).get();
  let projects = projectsSnapshot.docs.map(projectSnapshot => projectSnapshot.data());
  res.end(JSON.stringify(projects));
}
