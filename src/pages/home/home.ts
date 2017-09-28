import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  posts :any=[];
  constructor(public navCtrl: NavController,
              public af:AngularFireDatabase) {
        this.posts = af.list("/posts");
  }

}
