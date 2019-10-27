import * as firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

const config = {
  apiKey: 'AIzaSyBIRh76ikCHGYH0Gdd-2UdD9CVrfxwwR4c',
  authDomain: 'mumsp-op2019.firebaseapp.com',
  databaseURL: 'https://mumsp-op2019.firebaseio.com',
  projectId: 'mumsp-op2019',
  storageBucket: 'mumsp-op2019.appspot.com',
  messagingSenderId: '448319159556',
  appId: '1:448319159556:web:719868d25f8e6b458b2451',
  measurementId: 'G-9ECFY7605N'
}

// eslint-disable-next-line
!firebase.apps.length ? firebase.initializeApp(config) : ''
export const GoogleProvider = new firebase.auth.GoogleAuthProvider()
export const auth = firebase.auth()
export const DB = firebase.database()
export default firebase
