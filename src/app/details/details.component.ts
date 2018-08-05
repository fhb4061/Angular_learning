import { Component, OnInit } from '@angular/core';
import { DataService } from'../data.service'
import { Observable } from 'rxjs'; //hold data that is given to us from API

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  usersHere: Object;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getUsers().subscribe(
      data => this.usersHere = data
    )
  }

}
