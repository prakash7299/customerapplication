import { Component, OnInit } from '@angular/core';
import { Customer} from '../model/customer';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  customer:Customer=new Customer("prakash",10000);
}
