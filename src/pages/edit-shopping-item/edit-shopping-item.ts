import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase, FirebaseObjectObservable} from 'angularfire2/database';
import { ShoppingItem } from '../../models/shopping-item/shopping-item.interface';

// unsubscribe the object when going back to the shopping list page
import { Subscription } from 'rxjs/Subscription';

/**
 * Generated class for the EditShoppingItemPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit-shopping-item',
  templateUrl: 'edit-shopping-item.html',
})
export class EditShoppingItemPage {

  shoppingItemSubscription: Subscription;
  shoppingItemRef$: FirebaseObjectObservable<ShoppingItem>;
  shoppingItem = {} as ShoppingItem;

  constructor(public navCtrl: NavController, public navParams: NavParams,
  private database: AngularFireDatabase) {
    // capture the shopping item id  as a nav parameter
    const shoppingItemId = this.navParams.get('shoppingItemId');
    console.log(shoppingItemId);

    // set the scope of firebaseobject equale to our selected item
    this.shoppingItemRef$ = this.database.object(`shopping-list/${shoppingItemId}`);

    // subscribe to the object and get the result in the this.shoppingItem
    // this.oppingItemSubscription to unsubscribe while leaving the page
    this.shoppingItemSubscription =  this.shoppingItemRef$.subscribe(
      shoppingItem => this.shoppingItem = shoppingItem);
  }

  // update our firbase node with new data
  editShoppingItem(shoppingItem: ShoppingItem){
    this.shoppingItemRef$.update(shoppingItem);

    // send the user back to the shoppingList
    this.navCtrl.pop();
  }

  ionViewWillLeave(){
    // unsubscribe from the observable while leaving the page
    this.shoppingItemSubscription.unsubscribe();
  }

}
