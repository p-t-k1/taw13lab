import { Component, OnInit } from '@angular/core';
import {DataService} from "../../services/data.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-addpost',
  templateUrl: './addpost.component.html',
  styleUrls: ['./addpost.component.css']
})
export class AddpostComponent implements OnInit {

  public post = {
    title: '',
    image: '',
    text: '',
  };



  constructor(public dataService: DataService,
              private router: Router) {
  }

  ngOnInit(): void {
  }

  addPost() {
    console.log(this.post)
    this.dataService.addPost(this.post).subscribe((result) => {
      return result;
    });
    this.router.navigate(['/blog']);
  }


}
