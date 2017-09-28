import { Component } from '@angular/core';
import { FirebaseObjectObservable, AngularFireDatabase } from 'angularfire2/database';
/**
 * Generated class for the ConnectionComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'connection',
  templateUrl: 'connection.html'
})
export class ConnectionComponent {
  status : FirebaseObjectObservable<any>;
  constructor(public af:AngularFireDatabase) {
    this.status = this.af.object(".info/connected");
  }

}
