import { Component, OnInit } from '@angular/core';
import { Collectable } from '../collectable';
import { CollectableService } from '../collectable.service';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.scss']
})
export class CollectionComponent implements OnInit {
  collections: Collectable[]= [];

  onRemoveFromCollection(item: Collectable){

    this.collectableService.removefromCollection(item);

  }
  constructor(private collectableService: CollectableService) { }
   
 

  ngOnInit() {
    this.collections = this.collectableService.getCollection();
  }

}
