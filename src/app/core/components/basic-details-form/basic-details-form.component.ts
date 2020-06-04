import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TenantService } from '../../service/tenantService/tenant.service';

@Component({
  selector: 'app-basic-details-form',
  templateUrl: './basic-details-form.component.html',
  styleUrls: ['./basic-details-form.component.scss']
})
export class BasicDetailsFormComponent implements OnInit {

  constructor(private router:Router, private tenantService:TenantService) { }

  ngOnInit(): void {
  }

  submitBasicDetails(){
    // this.router.navigate(['/questions']);
    this.tenantService.addTenant({name:'thanveer',address:'200,angappan street',city:'chennai'})
  }

}
