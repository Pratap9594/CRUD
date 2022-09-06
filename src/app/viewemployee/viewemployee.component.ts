import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-viewemployee',
  templateUrl: './viewemployee.component.html',
  styleUrls: ['./viewemployee.component.css']
})
export class ViewemployeeComponent implements OnInit {
id:number=0;
emp:any;
emp1:Employee= new Employee();

  constructor(private vw:EmployeeService, private route: ActivatedRoute) { }
  viewEmp(){
    this.vw.viewEmployee(this.id).subscribe(data=>{this.emp1=data}),(err:any)=>{console.log(err)};
  }
  

  ngOnInit(): void {
    this.route.params.subscribe(params=>{this.id=params['id']})
    this.viewEmp();
  }

}
