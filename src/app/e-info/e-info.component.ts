import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import {DataService} from "../data.service";

@Component({
  selector: 'app-e-info',
  templateUrl: './e-info.component.html',
  styleUrls: ['./e-info.component.css'],
  providers:[DataService]
})
export class EInfoComponent implements OnInit {

  infoReceived1: string[]=[];
  infoReceived2: string[]=[];
  infoReceived3: string[]=[];

  getinfoFromService1(){
    this.infoReceived1 =  this.dservice.getInfo1()
  }
  getinfoFromService2(){
    this.infoReceived2 =  this.dservice.getInfo2()
  }
  getinfoFromService3(){
    this.infoReceived3 =  this.dservice.getInfo3()
  }

  constructor(private dservice: DataService ) { }

  ngOnInit(): void {
  }
  updateInfo(frm: any)
  {
    this.dservice.AddInfo(frm.value.location)
  }

}
