import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
baseUrl="http://localhost:8080/";
getAllEmployee(){
return this.http.get(this.baseUrl +"employee/employees");
}
createEmployee(data: Employee){
  return this.http.post(this.baseUrl +"employee/", data);
}
updateEmployee(data:Employee,id:number){
  return this.http.put(this.baseUrl+ "employee/id/"+id,data);
}
viewEmployee(id:number):Observable<Employee>{
  return this.http.get<Employee>("http://localhost:8080/employee/id/"+id)
}
deleteEmployee(id:any){
  return this.http.delete("http://localhost:8080/employee/id/"+id,{responseType:'text'});
}
  constructor(private http:HttpClient ) { }
}
