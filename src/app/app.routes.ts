import { Routes } from '@angular/router';
import { ApiintegrationComponent } from './apiintegration/apiintegration.component';
import { ReactiveformComponent } from './formparent/reactiveform/reactiveform.component';
import { TwowaydatabindingComponent } from './twowaydatabinding/twowaydatabinding.component';
import { AuthGuard } from './authguard';

export const routes: Routes = [
    { path: '', component: ApiintegrationComponent },
    { path: 'reactiveform', component: ReactiveformComponent },
    { path: 'twowaybinding', component: TwowaydatabindingComponent },
    {
        path: 'propertybinding',
        canActivate: [AuthGuard],
        loadComponent: () => import('./propertybinding/propertybinding.component').then(m => m.PropertybindingComponent)
    },

    // Wildcard route for a 404 page
    { path: '**', redirectTo: 'twowaybinding' }
];
