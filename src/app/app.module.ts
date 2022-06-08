import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ClickItemListaComponent } from './click-item-lista/click-item-lista.component';
import { ItemComponent } from './click-item-lista/item/item.component';
import { ItemDetailComponent } from './src/app/click-item-lista/item-detail/item-detail.component';

@NgModule({
  declarations: [AppComponent, ClickItemListaComponent, ItemComponent, ItemDetailComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
