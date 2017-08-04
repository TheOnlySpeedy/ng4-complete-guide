import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  ngOnInit() {
    firebase.initializeApp({
      apiKey: 'AIzaSyCI3wT2Qbuv0qXghQvM0U4xonJaIrM8mFo',
      authDomain: 'recipe-book-cf160.firebaseapp.com',
    });
  }
}
