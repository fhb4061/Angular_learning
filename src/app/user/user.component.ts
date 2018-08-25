import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { trigger,style,transition,animate,query,stagger } from '@angular/animations';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  animations: [
    trigger('listStagger',[
      transition('* <=> *', [
        query(':enter',
        [
          style({ opacity: 0, transform: 'translateY(-15px)'}),
          stagger('50ms',
        animate('550ms ease-out',
      style({ opacity: 1, transform: 'translateY(0px)'})))
        ], {optional: true}),

        query(':leave', animate('50ms', style({ opacity: 0}))
        , {optional: true})
      ])
    ])
  ]
})
export class UserComponent implements OnInit {

  users$: Object;
  
  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getUsers().subscribe(
      data =>  this.users$ = data
    )
  }

}
