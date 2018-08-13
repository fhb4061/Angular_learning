import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  //will contain the path the user is currently on
  currentUrl: string;

  constructor(private router: Router) { 
    router.events.subscribe((current: NavigationEnd) => this.currentUrl = current.url)
  }

  ngOnInit() {
  }

}
