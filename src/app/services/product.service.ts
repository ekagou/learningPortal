import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Results } from '../results';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  printToConsole(arg) {
    console.log(arg);
  }
}
