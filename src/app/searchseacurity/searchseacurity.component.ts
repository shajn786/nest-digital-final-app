import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-searchseacurity',
  templateUrl: './searchseacurity.component.html',
  styleUrls: ['./searchseacurity.component.css']
})
export class SearchseacurityComponent {
  scode =""
  securitydetails:any=[]

  constructor(private api : ApiService)
  {}

  search=()=>
  {
    let data:any={"scode":this.scode}
    console.log(data)
    this.api.searchSecurity(data).subscribe(

     (response:any)=>
     {
       this.securitydetails=response
     }



    )

  }

  deleButtonClick=(id:any)=>
  {
    let data1:any={"id":id}
    this.api.deleteSecurity(data1).subscribe(
     
      (response:any)=>
      {
        console.log(response)
        if(response.status == "success")
        {
          alert(" deleted")
          window.location.reload()
        }
        else
        {
          alert("not deleted")
        }
      }

    )
  }


}
