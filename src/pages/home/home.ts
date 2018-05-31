import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner'
import { ToastController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private barcodeScanner: BarcodeScanner, public toastCtrl: ToastController) {
  }

  scan(){
    console.log("Realizando scan...");

    this.barcodeScanner.scan().then(barcodeData => {
      console.log('Barcode data', barcodeData);
     }).catch(err => {
         console.log('Error: ', err);
         this.presentToast('Error'+err);
     });
  }

  presentToast(mensaje: string) {
    const toast = this.toastCtrl.create({
      message: 'Cordova no deseable',
      duration: 3000
    });
    toast.present();
  }

}
