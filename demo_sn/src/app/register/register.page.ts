import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { user } from 'src/Models/user';
import { CallpaiService } from '../callpai.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  dataUser: FormGroup;
  submitRequested: boolean = false;
  data:user;

  constructor(public fb: FormBuilder,public callapi:CallpaiService) {
    this.dataUser = this.fb.group({
      'idUser': [null],
      'nameUser': [null, Validators.required],
      'telUser': [null, Validators.required],
      'addressUser': [null, Validators.required],
      'idcardUser': [null, Validators.required]
    });
  }

  get f() { return this.dataUser.controls; }

  public isValid(name: string): boolean {
    var ctrl = this.dataUser.get(name);
    return ctrl.invalid && (ctrl.dirty || this.submitRequested);
  }

  ngOnInit() {
  }

  public log() {
    this.submitRequested = true;
    console.log(this.dataUser.value);
    this.data = this.dataUser.value
    this.callapi.adduser(this.data).subscribe(it =>{
      console.log(it);
    });
  } 

}
