import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-basic-details-form',
  templateUrl: './basic-details-form.component.html',
  styleUrls: ['./basic-details-form.component.scss']
})
export class BasicDetailsFormComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  submitBasicDetails(){
    this.router.navigate(['/questions']);
  }

}
