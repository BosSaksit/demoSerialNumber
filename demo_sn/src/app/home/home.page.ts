import { Component } from '@angular/core';
import { CallpaiService } from '../callpai.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  input: string;

  constructor(public callapi: CallpaiService, public router: Router) { }

  public getdata(serial) {
    console.log(this.input);
    this.router.navigate(['/info-data', { code: serial }])
   

  }

}
