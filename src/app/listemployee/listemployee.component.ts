import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-listemployee',
  templateUrl: './listemployee.component.html',
  styleUrls: ['./listemployee.component.css']
})
export class ListemployeeComponent implements OnInit {

  constructor(private empservice: EmployeeService, private route:ActivatedRoute) { }
  employee:any;
  id:any;
  emp:Employee=new Employee();
  
  getAllEmployee(){
  this.empservice.getAllEmployee().subscribe(data=>{this.employee=data});
}
deleteEmp(id:any){
  this.empservice.deleteEmployee(id).subscribe();
}
  ngOnInit(): void {
    this.route.params.subscribe(param=>{this.id=param['id']});

    this.getAllEmployee();
  }
}

