import { Component, OnInit } from '@angular/core';
import { Customer } from '../model/customer';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  customers:Customer[]=[
    new Customer("karthik",10000),
    new Customer("praveen",20000),
    new Customer("prakash",30000)
  ];

}
