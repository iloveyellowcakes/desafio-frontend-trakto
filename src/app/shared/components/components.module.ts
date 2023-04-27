import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { CardComponent } from './card/card.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { CoreModule } from 'src/app/core/core.module';
import { ModalMenuComponent } from './modal-menu/modal-menu.component';

@NgModule({
  declarations: [
    HeaderComponent,
    CardComponent,
    ModalMenuComponent
  ],
  imports: [
    CommonModule,
    CarouselModule,
    CoreModule
  ],
  exports: [HeaderComponent, CardComponent]
})
export class ComponentsModule {


}


