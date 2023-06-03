import { Component } from '@angular/core';

@Component({
  selector: 'app-notification',
  template: '<div [ngClass] = "{fadeout:displayproperty}"><div class="close"><p class="close">This website uses cookies to provide better user experience.</p><div><button class="btn" (click)="closenotification()">X</button></div></div></div>',
  styles: ["div{margin:10px 0px;padding:10px 20px;background-color:#fad7a0;text-align:center;}","p{font-size:16px;font-family:georgia;padding-top:20px}",".close{display:flex;justify-content:space-between;}",".btn{background-color:#fad7a0;border:none;padding:5px;}",".fadeout{visibility:hidden;opacity:0;transition:visibility 0s 2s,opacity 2s linear;}"]
})
export class NotificationComponent {
  displayproperty:boolean = false;
  closenotification(){
    this.displayproperty = true;
  }
}
