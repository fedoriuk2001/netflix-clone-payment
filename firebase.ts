// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCiUJ5qgz8nsXr2AbzyK4nskHeq14ePXDM',
  authDomain: 'netflix-clone-payment.firebaseapp.com',
  projectId: 'netflix-clone-payment',
  storageBucket: 'netflix-clone-payment.appspot.com',
  messagingSenderId: '146388324900',
  appId: '1:146388324900:web:89edc8b5f747e54f5c3eb1',
  measurementId: 'G-3ND6D8CMER',
}

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }
