// Styles
import '../styles/theme.css'
import '../styles/globals.css'
import {
  FirebaseAuthProvider,
  FirebaseAuthConsumer,
  IfFirebaseAuthed,
  IfFirebaseAuthedAnd
} from "@react-firebase/auth";
import { config } from "../config";
import firebase from "firebase/app";

export default function MyApp({ Component, pageProps }) {
  return (
    <FirebaseAuthProvider {...config} firebase={firebase}>
      <Component {...pageProps} />
    </FirebaseAuthProvider>
  )
}
