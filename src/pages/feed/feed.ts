import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
})
export class FeedPage {
public nome_usuario:string = "Hernaldo Gavião";
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  // Crindo uma função do tipo void para somar dois numeros 
  //public somaDoisNumeros(): void{
   // alert(5+10);
// Agora vou fazer essa mesma função atraves de parametro 
public somaDoisNumeros(num1:number, num2:number): void{
  alert(num1 + num2);
} 

  /**  esse é uma parte do ciclo de vida de uma pagina, aqui dentro dessa ionViwDiload ela vai sempre executar essa função.
Quando a viu a página tiver sido carregada então eu vou chamar esse soma dois números aqui dentro, detalhe importante, sempre 
que vc for fazer referencia de algum intem, aguma função ou propiedade de dentro da classe vc tem que usar o código de 
referencia chamado this.(siguinifica eu classe)e apos o ponto é a propiedade ou função que vc quer usar.*/ 
  ionViewDidLoad() {
   // this.somaDoisNumeros();
   
   //this.somaDoisNumeros(10, 99); /** Agora vamos adicionar parametro a essa função, separando os numeros por virgulas */
  }

}
