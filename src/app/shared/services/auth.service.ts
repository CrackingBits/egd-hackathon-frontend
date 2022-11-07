import { Injectable, NgZone } from '@angular/core';
import { User } from '../models/user';
import * as auth from 'firebase/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import {
  AngularFirestore,
  AngularFirestoreDocument,
} from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { AngularFireAnalytics } from '@angular/fire/compat/analytics';
import { AuthApiService } from 'src/app/api-swagger/services/auth-api.service';
import { AuthApiServiceMock } from './mocks/auth-api-mock.service';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  userData: any; // Save logged in user data

  constructor(
    public afs: AngularFirestore, // Inject Firestore service
    public afAuth: AngularFireAuth, // Inject Firebase auth service
    public router: Router,
    public ngZone: NgZone, // NgZone service to remove outside scope warning
    public analytics: AngularFireAnalytics,
    private authApiService: AuthApiServiceMock
  ) {
    this.createStoreErrorHandler = this.createStoreErrorHandler.bind(this);
    this.createStoreOnBeforeSend = this.createStoreOnBeforeSend.bind(this);

    /* Saving user data in localstorage when
    logged in and setting up null when logged out */
    this.afAuth.authState.subscribe((user) => {
      console.debug('afAuth.authState.subscribe(user):', user);

      if (user) {
        user.getIdToken().then(function (idToken: any) {
          authApiService
            .apiV1AuthTokenPost$Json({ body: { idToken: idToken } })
            .subscribe(
              (resp: any) => {
                console.debug('apiV1AuthTokenPost$Json RESP', resp);
                localStorage.setItem('token', resp.token);
              },
              (err: any) => {
                console.error(err);
              }
            );
        });

        this.userData = user;
        localStorage.setItem('user', JSON.stringify(this.userData));
        this.analytics.setUserId(user.uid);
        JSON.parse(localStorage.getItem('user')!);
      } else {
        localStorage.clear();
        localStorage.setItem('user', 'null');
        JSON.parse(localStorage.getItem('user')!);
      }
    });
  }
  // Sign in with email/password
  SignIn(email: string, password: string) {
    return this.afAuth
      .signInWithEmailAndPassword(email, password)
      .then((result) => {
        this.SetUserData(result.user);
        this.afAuth.authState.subscribe((user) => {
          if (user) {
            this.analytics.logEvent('signInWithEmail');
            this.router.navigate(['dashboard']);
          }
        });
      })
      .catch((error) => {
        window.alert(error.message);
      });
  }
  // Sign up with email/password
  SignUp(email: string, password: string) {
    return this.afAuth
      .createUserWithEmailAndPassword(email, password)
      .then((result) => {
        /* Call the SendVerificaitonMail() function when new user sign
        up and returns promise */
        this.SendVerificationMail();
        this.SetUserData(result.user);
      })
      .catch((error) => {
        window.alert(error.message);
      });
  }
  // Send email verfificaiton when new user sign up
  SendVerificationMail() {
    return this.afAuth.currentUser
      .then((u: any) => u.sendEmailVerification())
      .then(() => {
        this.router.navigate(['verify-email-address']);
      });
  }
  // Reset Forggot password
  ForgotPassword(passwordResetEmail: string) {
    return this.afAuth
      .sendPasswordResetEmail(passwordResetEmail)
      .then(() => {
        window.alert('Password reset email sent, check your inbox.');
      })
      .catch((error) => {
        window.alert(error);
      });
  }
  // Returns true when user is looged in and email is verified
  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user')!);
    return user !== null &&
      (user.emailVerified !== false || user.isAnonymous === true)
      ? true
      : false;
    //return user !== null && user.emailVerified !== false ? true : false;
  }
  // Sign in with Google
  GoogleAuth() {
    return this.AuthLogin(new auth.GoogleAuthProvider()).then((res: any) => {});
  }

  AnonymAuth() {
    return this.afAuth
      .signInAnonymously()
      .then((result) => {
        this.SetUserData(result.user);

        this.afAuth.authState.subscribe((user) => {
          if (user) {
            this.analytics.logEvent('signInAnonymously');
            this.router.navigate(['dashboard']);
          }
        });
      })
      .catch((error) => {
        window.alert(error);
      });
  }
  // Auth logic to run auth providers
  AuthLogin(provider: any) {
    return this.afAuth
      .signInWithPopup(provider)
      .then((result: any) => {
        this.SetUserData(result.user);

        this.afAuth.authState.subscribe((user) => {
          if (user) {
            this.analytics.logEvent('signInWithPopup');
            this.router.navigate(['dashboard']);
          }
        });
      })
      .catch((error) => {
        window.alert(error);
      });
  }
  /* Setting up user data when sign in with username/password,
  sign up with username/password and sign in with social auth
  provider in Firestore database using AngularFirestore + AngularFirestoreDocument service */
  SetUserData(user: any) {
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(
      `users/${user.uid}`
    );
    const userData: User = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
      emailVerified: user.emailVerified,
    };
    return userRef.set(userData, {
      merge: true,
    });
  }
  // Sign out
  SignOut() {
    return this.afAuth.signOut().then(() => {
      this.analytics.logEvent('signOut');
      this.analytics.setUserId('');
      localStorage.clear();
      this.router.navigate(['sign-in']);
    });
  }

  get bearer(): string {
    const token: any = localStorage.getItem('token'); // OPTIMIZE
    return 'Bearer ' + token;
  }

  createStoreErrorHandler(err: any) {
    if (err.message === 'Unauthorized') {
      console.error(err);
    }
  }

  createStoreOnBeforeSend(method: any, ajaxOptions: any) {
    ajaxOptions.headers = { Authorization: this.bearer };
  }
}
