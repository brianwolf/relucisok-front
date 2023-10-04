import { Component, OnInit } from '@angular/core';
import { JsonService } from 'app/services/jsonService';

@Component({
  selector: 'app-networks',
  templateUrl: './networks.component.html',
  styleUrls: ['./networks.component.scss']
})
export class NetworksComponent implements OnInit {

  data: any = {}

  constructor(private jsonService: JsonService) { }

  ngOnInit() {
    this.jsonService.getData()
      .subscribe(data => {
        this.data = data.networks;
      })
  }

}
