import { Component, OnInit } from '@angular/core';
import { JsonService } from 'app/services/jsonService';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  data: any = {}

  constructor(private jsonService: JsonService) { }

  ngOnInit() {
    this.jsonService.getData()
      .subscribe(data => {
        this.data = data.footer;
      })
  }

}
