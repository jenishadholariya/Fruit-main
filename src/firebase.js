import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCE2YOEZlQt3AWHyotCJSrOKNMIpI0BlLI",
  authDomain: "e-frutikha.firebaseapp.com",
  projectId: "e-frutikha",
  storageBucket: "e-frutikha.appspot.com",
  messagingSenderId: "491089046900",
  appId: "1:491089046900:web:fc148cae4ddc8ddb0ed021",
  measurementId: "G-SJ6DY4SVMP"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);