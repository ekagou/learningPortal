import { Component, OnInit } from '@angular/core';
import { SearchComponent } from '../search/search.component';
import { HttpClient } from '@angular/common/http';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  username = '';
  id = "";
  response: any;
  constructor(private svc: ProductService, private http: HttpClient) {
    this.svc.printToConsole('Got the service');
  }

  ngOnInit() {
  }

  search() {
    if(this.username == "premier"){
      this.id = "100";
    }
    if (this.username == "private") {
      this.id = "200";
    } 
    if (this.username == "wealth") {
      this.id = "300";
    } 
    if (this.username == "ebucks") {
      this.id = "400";
    }
    console.log(this.username);
    //this.http.get('https://jsonplaceholder.typicode.com/users/' + this.id).
    this.http.get('https://api.mlab.com/api/1/databases/codefest/collections/products/'+this.id+'?apiKey=zzoeSGcNjMLtwaPPxqOukd4Jllas2BTs').
      subscribe((response) => {
        this.response = response;
        console.log(response);
      });
  }

}
