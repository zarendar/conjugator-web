import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';

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
    BrowserAnimationsModule,
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
