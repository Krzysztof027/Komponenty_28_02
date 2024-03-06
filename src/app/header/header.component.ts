import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  //przesyłanie danych pomiędzy komponentami 

  @Output() featureSelected = new EventEmitter<string>();
  //implemnetujemy metode
  onSelect(feature: string){
    this.featureSelected.emit(feature);
  }
}
