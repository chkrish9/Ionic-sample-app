import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import { Post } from '../../logic/post'; 
/**
 * Generated class for the PostPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-post',
  templateUrl: 'post.html',
})
export class PostPage {
  post : Post = new Post();

  constructor(public navCtrl: NavController,
              public af:AngularFireDatabase) {
  }

  submit(){
    this.af.list("/posts").push(this.post);
    this.post = new Post();
    this.navCtrl.parent.select(0);
  }

}
