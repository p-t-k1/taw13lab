import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private url: string = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getById(id: string) {
    return this.http.get(this.url + '/api/posts/' + id);
  }

  getAll() {
    return this.http.get(this.url + '/api/posts');
  }

  addPost(post: any) {
    return this.http.post(this.url + '/api/posts', post);
  }
}
