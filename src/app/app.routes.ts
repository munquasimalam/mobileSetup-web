// ====== ./app/app.routes.ts ======

// Imports
// Deprecated import
// import { provideRouter, RouterConfig } from '@angular/router';
import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { CatListComponent } from './cats/cat-list.component';
// import { DogListComponent } from './dogs/dog-list.component';

// Route Configuration
export const routes: Routes = [
    {
        path: '',
        redirectTo: '/',
        pathMatch: 'full'
      }
//   { path: 'cats', component: CatListComponent },
//   { path: 'dogs', component: DogListComponent }
];

// Deprecated provide
// export const APP_ROUTER_PROVIDERS = [
//   provideRouter(routes)
// ];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);