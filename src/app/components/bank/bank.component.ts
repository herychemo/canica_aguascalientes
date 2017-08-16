import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bank',
  templateUrl: './bank.component.html',
  styleUrls: ['./bank.component.css']
})
export class BankComponent implements OnInit {

    readonly NUMERO_DE_CUENTA : string = '01505051541';
    readonly CLABE : string = '044010015050515418';


  constructor() { }

  ngOnInit() {
  }

}
