import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(public navCtrl: NavController) { }

  ngOnInit() {

  }
  public checklogin() {
    this.navCtrl.navigateForward('home');
  }
  public toRegisterPage() {
    this.navCtrl.navigateForward('register');

  }

}
