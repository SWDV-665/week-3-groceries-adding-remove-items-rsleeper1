import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  title = "Grocery List";
  items = [
    {
      name: "Milk",
      quantity: "1"
    },
    {
      name: "Bread",
      quantity: "2"
    },
    {
      name: "Eggs",
      quantity: "3"
    },
    {
      name: "Pizza",
      quantity: "1"
    },
  ];
  constructor(public toastController: ToastController, public alertController: AlertController) {}

  async presentToast(item, index) {
    const toast = await this.toastController.create({
      message: 'Removing item - ' + item.name + "...",
      duration: 2000
    });
    toast.present();

    this.items.splice(index, 1);
  }

  addItem(){
    this.presentAlertPrompt();
  }

  async presentAlertPrompt() {
    const alert = await this.alertController.create({
      header: 'Add Item',
      message: 'Please enter item...',
      inputs: [
        {
          name: 'name',
          type: 'text',
          placeholder: 'Name'
        },
        {
          name: 'quantity',
          type: 'text',
          placeholder: 'Quantity'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: (item) => {
            console.log('Confirm Ok', item);
            this.items.push(item);
          }
        }
      ]
    });

    await alert.present();
  }
  

}
