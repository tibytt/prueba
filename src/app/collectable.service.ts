import { Injectable } from '@angular/core';
import {Collectable} from './collectable'

@Injectable()
export class CollectableService {

  private  collectables: Collectable[] = [{description: 'Este libro trata de una historia que se desarrolla en un mundo magico', type: 'book1'},
  {description: 'Este libro trata sobre la historia de joseso un señor jose', type: 'book2'},
  {description: 'este libro trata sobre el mar', type: 'book3'},
  {description: 'este es un libro de programacion orientada a objetos', type: 'book4'},
  
  
  ];
  private collection: Collectable [] = [];

  getCollectables() {
    return this.collectables;
  }
  getCollection() {
    return this.collection;
  }




  addtoCollection(item: Collectable){
    if (this.collection.indexOf(item) !== -1){
      return;
    }
    this.collection.push(item);
  }

  removefromCollection(item: Collectable){
    this.collection.splice(this.collection.indexOf(item),1);
  }



  constructor() { }

}
