import { Component, OnInit, NgModule } from '@angular/core';
import { ProductService } from '../services/product.service';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
  @NgModule({
     imports: [
      FormsModule
    ]
  })

export class SearchComponent implements OnInit {

  username = '';
  response: any;
  constructor(private svc: ProductService, private http: HttpClient) {
    this.svc.printToConsole('Got the service');
  }

   ngOnInit() {
   // let obs = this.http.get('https://jsonplaceholder.typicode.com/users');
   // obs.subscribe((response) => console.log(response));
  }

  search() {
    this.http.get('https://jsonplaceholder.typicode.com/users/' + this.username).
    subscribe((response) => {
      this.response = response;
      console.log(response);
    });
  }
}
