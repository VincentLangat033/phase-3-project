
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage"
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


const firebaseConfig = {
  apiKey: "AIzaSyDTFbcymU5NuZk3I81C_kUIYrHfc3L2lPg",
  authDomain: "poolhouseproject-f5401.firebaseapp.com",
  projectId: "poolhouseproject-f5401",
  storageBucket: "poolhouseproject-f5401.appspot.com",
  messagingSenderId: "486755337361",
  appId: "1:486755337361:web:707efb9632003447f56b30",
  measurementId: "G-4W2G0HJKTZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
// const analytics = getAnalytics(app);