// Style
import styles from './style.module.css'

import React, {useState} from 'react';
import firebase from 'firebase/app'
import 'firebase/auth'
import { FirebaseAuthConsumer, IfFirebaseAuthed, IfFirebaseAuthedAnd } from '@react-firebase/auth'

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
      <input value={email} onChange={event => setEmail(event.target.value)}></input>
      <input type="password" value={password} onChange={event => setPassword(event.target.value)}></input>
      <button
        onClick={() => {
          firebase.auth().createUserWithEmailAndPassword(email, password).then(() => {
            firebase.auth().signInWithEmailAndPassword(email, password).then(function(result) {
              // result.user.tenantId should be ‘TENANT_PROJECT_ID’.
            }).catch(function(error) {
              // Handle error.
            });
          });
        }}
      >
        Sign In with Email
      </button>
      <button
        onClick={() => {
          const googleAuthProvider = new firebase.auth.GoogleAuthProvider()
          firebase.auth().signInWithPopup(googleAuthProvider)
        }}
      >
        Sign In with Google
      </button>
      <button
        data-testid="signin-anon"
        onClick={() => {
          firebase.auth().signInAnonymously()
        }}
      >
        Sign In Anonymously
      </button>
      <button
        onClick={() => {
          firebase.auth().signOut()
        }}
      >
        Sign Out
      </button>
      <FirebaseAuthConsumer>
        {({ isSignedIn, user, providerId }) => {
          return (
            <pre style={{ height: 300, overflow: 'auto' }}>
              {JSON.stringify({ isSignedIn, user, providerId }, null, 2)}
            </pre>
          )
        }}
      </FirebaseAuthConsumer>
      <div>
        <IfFirebaseAuthed>
          {() => {
            return <div>You are authenticated</div>
          }}
        </IfFirebaseAuthed>
        <IfFirebaseAuthedAnd filter={({ providerId }) => providerId !== 'anonymous'}>
          {({ providerId }) => {
            return <div>You are authenticated with {providerId}</div>
          }}
        </IfFirebaseAuthedAnd>
      </div>
    </div>
  )
}

export default Login
