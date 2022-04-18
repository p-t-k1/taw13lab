import {Component, Input, OnInit} from '@angular/core';
import {DataService} from "../../services/data.service";

@Component({
  selector: 'blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  public items$: any;
  @Input() filterText: string = '';

  constructor(private service: DataService) {
  }

  ngOnInit(): void {
    this.getAll();
  }

  getAll(): void{
    console.log("TEST getall")
    this.service.getAll().subscribe(response => {
      this.items$ = response;
      //console.log("GET ALL RESPONSE : "  + JSON.stringify(response))
      console.log("ITEMY" + this.items$)
    });

  }
}
