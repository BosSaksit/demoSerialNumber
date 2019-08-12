import { Component, OnInit } from '@angular/core';
import { CallpaiService } from '../callpai.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-info-data',
  templateUrl: './info-data.page.html',
  styleUrls: ['./info-data.page.scss'],
})
export class InfoDataPage implements OnInit {
  getid: any;
  countmonk: string;
  nameAmulet: string;
  typeAmulet: string;
  compoundAmulet: string;
  shapeAmulet:string;
  temple:string;
  province:string;
  dateConsecrate:string;
  data: any;

  constructor(public callapi: CallpaiService, public ac: ActivatedRoute) { }

  ngOnInit() {
    this.getid = this.ac.snapshot.paramMap.get('code');
    console.log(this.getid);
    this.callapi.getUserBySreial(this.getid).subscribe(it => {
      console.log(it);
      this.data = it;
      this.countmonk = it.countMonk;
      this.compoundAmulet = it.compoundAmulet;
      this.dateConsecrate = it.dateConsecrate;
      this.nameAmulet = it.nameAmulet;
      this.typeAmulet = it.typeAmulet;
      this.shapeAmulet = it.shapeAmulet;
      this.temple = it.temple;
      this.province = it.province;
      
      console.log(this.data);

    });

  }

}
