import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fotos',
  templateUrl: './fotos.component.html',
  styleUrls: ['./fotos.component.scss']
})
export class FotosComponent implements OnInit {

  listPhotos: string[] = [
    "assets/img/fotos/89c87d79-16b9-4f6d-ab2b-8bd3979ee11e.jpeg",
    "assets/img/fotos/ffd2a535-8ff5-4d13-850f-77d9836b21cd.jpeg",
    "assets/img/fotos/89c87d79-16b9-4f6d-ab2b-8bd3979ee11a.jpg",
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
