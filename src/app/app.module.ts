import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthGuard } from './auth.guard';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { TestComponent } from './components/test/test.component';

const config = {
  apiKey: "AIzaSyDzmrIeZv1WIgHuHyYP2x1z10WyxqJY-HM",
  authDomain: "andriiantoniukapps.firebaseapp.com",
  databaseURL: "https://andriiantoniukapps.firebaseio.com",
  projectId: "andriiantoniukapps",
  storageBucket: "andriiantoniukapps.appspot.com",
  messagingSenderId: "662485105098",
  appId: "1:662485105098:web:57faf9fdc1426c96caf733",
  measurementId: "G-XSGTW4YR98"
};

@NgModule({
  declarations: [
    AppComponent,
    UserProfileComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(config),
    AngularFirestoreModule,
    AngularFireAuthModule,
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
