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
  response: any;
  constructor(private svc: ProductService, private http: HttpClient) {
    this.svc.printToConsole('Got the service');
  }

  ngOnInit() {
  }

  search() {
    this.http.get('https://jsonplaceholder.typicode.com/users/' + this.username).
      subscribe((response) => {
        this.response = response;
        console.log(response);
      });
  }

}
