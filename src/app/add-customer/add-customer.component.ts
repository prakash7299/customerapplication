import { Component, OnInit } from '@angular/core';
import { Customer } from '../model/customer';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent {

  constructor() { }

  customer:Customer=undefined;

  addCustomer(form:any){
    let data=form.value;
   let customername=data.customername;
    let balance=data.balance;
    this.customer=new Customer(customername,balance);
    console.log("user initialized="+this.customer.balance);
   }

}
