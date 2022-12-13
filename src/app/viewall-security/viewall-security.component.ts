import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-viewall-security',
  templateUrl: './viewall-security.component.html',
  styleUrls: ['./viewall-security.component.css']
})
export class ViewallSecurityComponent {

  securitydata:any=[]

  constructor(private api : ApiService)
  {
    this.api.fetchSecurity().subscribe(

      (response:any)=>
      {
         this.securitydata=response
      }

    )
  }

}
