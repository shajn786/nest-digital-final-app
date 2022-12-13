import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-viewall-employee',
  templateUrl: './viewall-employee.component.html',
  styleUrls: ['./viewall-employee.component.css']
})
export class ViewallEmployeeComponent {

 empdetails:any = []

constructor(private api : ApiService){

  this.api.fetchEmployee().subscribe(

    (response :any)=>
    {
      this.empdetails=response
    }


  )

}



}
