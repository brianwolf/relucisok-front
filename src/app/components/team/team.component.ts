import { Component, OnInit } from '@angular/core';
import { JsonService } from 'app/services/jsonService';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {

  data: any = []

  constructor(private jsonService: JsonService) { }

  ngOnInit() {
    this.jsonService.getData()
      .subscribe(data => {
        this.data = data.team;
      })
  }


}
