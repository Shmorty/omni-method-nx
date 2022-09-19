import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabsComponent } from './tabs/tabs.component';
import { LoginComponent } from './login/login.component';
import { IonicModule } from '@ionic/angular';
import { WelcomeComponent } from './welcome/welcome.component';

@NgModule({
  imports: [CommonModule, IonicModule],
  declarations: [TabsComponent, LoginComponent, WelcomeComponent],
  exports: [TabsComponent, LoginComponent, WelcomeComponent],
})
export class UiModule {}
