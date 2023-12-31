import { Component, OnInit } from '@angular/core';
import { JsonService } from 'app/services/jsonService';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  data: any = {}

  constructor(private jsonService: JsonService) { }

  ngOnInit() {
    this.jsonService.getData()
      .subscribe(data => {
        this.data = data.header;
      })
  }

}
