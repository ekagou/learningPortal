import { Component, OnInit } from '@angular/core';
import { SearchComponent } from '../search/search.component';
import { HttpClient } from '@angular/common/http';
import { ProductService } from '../services/product.service';
import { forEach } from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

  username = '';
  password = "";
  response: any;
  constructor(private svc: ProductService, private http: HttpClient) {
    this.svc.printToConsole('Got the service');
  }

  ngOnInit() {
  }



  login() {
    //console.log(this.username);
    //console.log(this.password);
    this.http.get('https://api.mlab.com/api/1/databases/codefest/collections/users/?apiKey=zzoeSGcNjMLtwaPPxqOukd4Jllas2BTs').
      subscribe((response) => {
        this.response = response;
        console.log(response[1].email);
        //{{this.username}}
        //{{this.password}}
        var i;
        for (i = 0; i < response.length; i++) { 
          //console.log(response[i].email);
          if (this.username == response[i].email && this.password == response[i].password){
            console.log("log in successfull");            
            window.location.href = 'http://localhost:4200/home?';
          }
        }
}}