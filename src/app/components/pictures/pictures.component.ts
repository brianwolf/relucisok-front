import { Component, OnInit } from '@angular/core';
import { JsonService } from 'app/services/jsonService';

@Component({
  selector: 'app-pictures',
  templateUrl: './pictures.component.html',
  styleUrls: ['./pictures.component.scss']
})
export class PicturesComponent implements OnInit {

  data: any = []

  constructor(private jsonService: JsonService) { }

  ngOnInit() {
    this.jsonService.getData()
      .subscribe(data => {
        this.data = data.pictures;
      })
  }

}
