import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';

import { AppComponent } from './app.component';
var firebaseConfig = {
    apiKey: "AIzaSyDNu1nRIRKt52562aOPcHAMYgMddXgb624",
    authDomain: "firestore-573fd.firebaseapp.com",
    databaseURL: "https://firestore-573fd.firebaseio.com",
    projectId: "firestore-573fd",
    storageBucket: "firestore-573fd.appspot.com",
    messagingSenderId: "823637704398"
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),  
    AngularFirestoreModule  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
