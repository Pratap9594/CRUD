import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-updateemployee',
  templateUrl: './updateemployee.component.html',
  styleUrls: ['./updateemployee.component.css']
})
export class UpdateemployeeComponent implements OnInit {

  constructor(private activeRoute: ActivatedRoute, private empservice: EmployeeService, private route: Router) { }

     id: number=0;
     employee:Employee= new Employee();
  ngOnInit(): void {
    this.activeRoute.params.subscribe(param=>{this.id=param['id']});
  this.getEmployee();
  }
  getEmployee(){
    this.empservice.viewEmployee(this.id).subscribe(data=>{this.employee=data});
  }
  updateEmployee(){
this.empservice.createEmployee(this.employee).subscribe(
  data=>{console.log(data),
    this.route.navigate(['']);
});
  
}

}
