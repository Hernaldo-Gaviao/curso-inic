
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';

/**
 * Generated class for the IntroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-intro',
  templateUrl: 'intro.html',
})
export class IntroPage {
// para navegar para qualquer pagina que quiser vamos usar navCtrl:
  constructor(public navCtrl: NavController, 
  public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad IntroPage');
  }
  // para acesar as propiedades do construtor precisa usar a palavra chave this.porque quando se usa
  // a palavra this. estamos nos refirindo tudo oque tem nesta classe (Intropage), this = pegue
  // nesse caso significa, pegue esta (a propiedade NavCtrl) e asee esta propiedade.
 goToTabsPage(){
 this.navCtrl.push(TabsPage);
 }
}
