import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { registerLocaleData } from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  formGroup: FormGroup;
  public anyList:any;

  constructor(private http:HttpClient) {}
  
  onSubmit() {
    //TODO: Use EventEmitter with form value
    const username = this.formGroup.get('username')?.value;
    const password = this.formGroup.get('password')?.value;

    console.log("password:"+password);

    console.warn(this.formGroup.get('username')?.value);
    this.register();
  }

  ngOnInit(): void {
    this.formGroup = new FormGroup({
      username: new FormControl(''),
      password: new FormControl('')
    });
    console.info(this.formGroup.value);
  }

  register() {
    const headers = new HttpHeaders().set("Content-type","application/json; charset=UTF-8");
    //console.info(headers);
    this.http.post("http://localhost:8081/login" ,this.formGroup.value).subscribe(res=>{
      console.log(1)
      console.log(res)
      // LocalStorage.setItem('token' ,res.headers.get('Authorization'));
    })
  }

}
