import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ShoppingItem } from '../../models/shopping-item/shopping-item.interface';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'page-add-shopping',
  templateUrl: 'add-shopping.html',
})
export class AddShoppingPage {

  // creating the new object
  shoppingItem = {} as ShoppingItem;
  shoppingItemRef$: FirebaseListObservable<ShoppingItem[]>

  constructor(public navCtrl: NavController, public navParams: NavParams, 
  private database: AngularFireDatabase) {
    this.shoppingItemRef$ = this.database.list('shopping-list');
    // shopping list is a node inside firabase that stores the data in the form of json
  }

  addShoppingItem(shoppingItem: ShoppingItem){
    // logout the results
    //console.log(shoppingItem);
    /*
      creating a new anonymous object and convert itemnumber into number
      push this to our firebase database under the shopping-list node
    */
    this.shoppingItemRef$.push({
      itemName: this.shoppingItem.itemName,
      itemNumber: Number(this.shoppingItem.itemNumber)
    });

    // reset our shopping item
    this.shoppingItem = {} as ShoppingItem;

    // navigate the user back to the shopping list page
    this.navCtrl.pop();
  }

}
