
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-deleteemployee',
  templateUrl: './deleteemployee.component.html',
  styleUrls: ['./deleteemployee.component.css']
})
export class DeleteemployeeComponent implements OnInit {
id:number=0;
delete:any;

  constructor(private del:EmployeeService) { }
  
  deleteEmployee(id:number=0){
    return this.del.deleteEmployee(this.id).subscribe(data=>{this.delete=data});
  }


  ngOnInit(): void {
    this.deleteEmployee();
  }
}

