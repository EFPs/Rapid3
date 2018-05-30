import firebase from 'firebase'

const config = {
    apiKey: "AIzaSyAc3RQl0n6lJZ9Icly-SK9n0MocPVaRjc0",
    authDomain: "foodrand-28596.firebaseapp.com",
    databaseURL: "https://foodrand-28596.firebaseio.com",
    projectId: "foodrand-28596",
    storageBucket: "foodrand-28596.appspot.com",
    messagingSenderId: "916985906806"
}

firebase.initializeApp(config)

export default firebase
export const db = firebase.database()
export const auth = firebase.auth()
export const faceProvider = new firebase.auth.FacebookAuthProvider()
export const gooProvider = new firebase.auth.GoogleAuthProvider()
