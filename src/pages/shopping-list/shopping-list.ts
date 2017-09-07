import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController} from 'ionic-angular';
import { AddShoppingPage } from '../add-shopping/add-shopping'; // importing AddShoppingPage
import { EditShoppingItemPage} from '../edit-shopping-item/edit-shopping-item'; // importing edit page
import { AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';
import { ShoppingItem } from '../../models/shopping-item/shopping-item.interface';

@Component({
  selector: 'page-shopping-list',
  templateUrl: 'shopping-list.html',
})
export class ShoppingListPage {

  shoppingListRef$: FirebaseListObservable<ShoppingItem[]>

  constructor(public navCtrl: NavController, public navParams: NavParams, 
  private database: AngularFireDatabase, private actionSheetCtrl: ActionSheetController) {
    // pointing shoppinglistref$ to the firebase -> 'shopping list' node
    this.shoppingListRef$ = this.database.list('shopping-list');
  }

  selectShoppingItem(shoppingItem: ShoppingItem){
    // display an action sheet 1. edit 2. delete 3. cancel
    this.actionSheetCtrl.create({
      title: `${shoppingItem.itemName}`,
      buttons: [
        {
          text: 'Edit',
          handler: () => {
            // send the user to the edit shopping page and pass the current shopping item
            this.navCtrl.push(EditShoppingItemPage, { shoppingItemId: shoppingItem.$key});
          } 
        },
        {
          text: 'Delete',
          role: 'distructive',
          handler: () => {
            // it will delete the current shopping item
            this.shoppingListRef$.remove(shoppingItem.$key);
          }
        },
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log("The user has selected the cancel button");
          }
        }
      ]
    }).present();

  }

 navigateToAddShoppingPage(){
   // Navigate to the user to the add shopping page
   this.navCtrl.push(AddShoppingPage);
 }

}
