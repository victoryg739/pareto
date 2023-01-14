import firebase from  'firebase/compat/app'
import 'firebase/compat/auth'

const app = firebase.initializeApp({
  apiKey: "AIzaSyBwr5vzWmpsNunS05hKEA-417R7pk91bqQ",
  authDomain: "auth-demo-45d70.firebaseapp.com",
  projectId: "auth-demo-45d70",
  storageBucket: "auth-demo-45d70.appspot.com",
  messagingSenderId: "499639814796",
  appId: "1:499639814796:web:d84a46ae2b24becce149a9"
})

export const auth = app.auth()
export default app
