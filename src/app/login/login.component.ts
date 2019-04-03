import { environment as env } from 'src/environments/environment';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { SearchComponent } from '../search/search.component';
import { HttpClient } from '@angular/common/http';
import { ProductService } from '../services/product.service';
import { forEach } from '@angular/router/src/utils/collection';
import {Globals} from 'src/app/global';
import {Router} from "@angular/router"
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

  //env = environment;
  @Output() loginClickedEvent = new EventEmitter<String>();



  username = '';
  password = "";
  response: any;
  constructor(private router: Router, private globals: Globals, private svc: ProductService, private http: HttpClient) {
    this.svc.printToConsole('Got the service');
  }


 


  ngOnInit() {
  }

  login() {
    this.http.get('https://api.mlab.com/api/1/databases/codefest/collections/users/?apiKey=zzoeSGcNjMLtwaPPxqOukd4Jllas2BTs').
      subscribe((response) => {
        this.response = response;
        console.log(response[1].email);
        var i;
        for (i = 0; i < Object.keys(response).length; i++) { 
          if (this.username == response[i].email && this.password == response[i].password){
            console.log("log in successfull");
            this.globals.isLoggedIn = true;
            this.globals.name = this.username;
            this.router.navigate(['/home']);
          }
        }
      })

    } 
  }
