import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';

@Component({
  templateUrl: 'build/pages/hello-ionic/hello-ionic.html'
})
export class HelloIonicPage {
  constructor(public navCtrl: NavController) {
    
  }

  backHome() {
      this.navCtrl.setRoot(HelloIonicPage);
    }
}
