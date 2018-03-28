import { Component, OnInit } from '@angular/core';
import { CollectableService } from '../collectable.service';
import { Collectable } from '../collectable';

@Component({
  selector: 'app-market',
  templateUrl: './market.component.html',
  styleUrls: ['./market.component.scss']
})
export class MarketComponent implements OnInit {
  collectables: Collectable[]= [];
   

  onAddToCollection(item: Collectable){

    this.collectableService.addtoCollection(item);

  }



  constructor(private collectableService: CollectableService) { }

  ngOnInit() {

    this.collectables =  this.collectableService.getCollectables();
  }

}
