import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'local',
    loadChildren: () => import('./pages/local/local.module').then( m => m.LocalPageModule)
  },
  {
    path: 'cpu',
    loadChildren: () => import('./pages/cpu/cpu.module').then( m => m.CpuPageModule)
  },
  {
    path: 'online',
    loadChildren: () => import('./pages/online/online.module').then( m => m.OnlinePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
