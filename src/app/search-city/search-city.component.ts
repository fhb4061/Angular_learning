import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-search-city',
  templateUrl: './search-city.component.html',
  styleUrls: ['./search-city.component.css']
})
export class SearchCityComponent implements OnInit {

  posts: Object;

  constructor(private data: DataService) {
  }

  ngOnInit() {
    this.data.getPosts().subscribe(
      data => this.posts = data

    )
  }

}
