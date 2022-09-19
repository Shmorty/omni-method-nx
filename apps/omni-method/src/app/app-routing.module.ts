import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoginComponent, TabsComponent, WelcomeComponent } from '@omni-method-nx/ui';

const routes: Routes = [
  // {
  //   path: 'ui',
  //   loadChildren: () =>
  //   import('@omni-method-nx/ui').then((m) => m.UiModule),
  // },
  {
    path: 'welcome',
    component: WelcomeComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'tabs',
    component: TabsComponent,
  },
  {
    path: '',
    redirectTo: '/welcome',
    pathMatch: 'full',
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
