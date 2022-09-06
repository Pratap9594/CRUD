import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-createemployee',
  templateUrl: './createemployee.component.html',
  styleUrls: ['./createemployee.component.css']
})
export class CreateemployeeComponent implements OnInit {

  constructor(private cre:EmployeeService, private route: ActivatedRoute) { }
  cremp:any;
  err:any;
  id:number=0;
  emp:Employee=new Employee();
  create(){
    this.cre.createEmployee(this.emp).subscribe(data=>{console.log(data)});
  }
  getEmp(){
    this.cre.viewEmployee(this.id).subscribe(data=>{this.emp=data}),(err: any)=>{console.log(err)};
  }


  ngOnInit(): void {
    this.route.params.subscribe(param=>{this.id=param['id']});
    this.getEmp();

  }

}
